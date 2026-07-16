#!/usr/bin/env node
/**
 * Reachability preflight for Playwright e2e tests. Run after ensure-wiki.js.
 *
 * Phase A (default) — host-side HTTP probes:
 *   probes key wiki URLs, verifies a content sentinel in each body (an HTTP
 *   200 with an error/blank body still fails), and samples latency so slow
 *   responses are diagnosed as such instead of surfacing as locator timeouts.
 *
 * Phase B (--docker) — container-side checks; requires the docker CLI, so
 *   run it from the HOST, not from inside a container:
 *   verifies both compose services are running with no restart loop, then
 *   checks HTTP and DB connectivity from inside the mediawiki container.
 *
 *   node infra/scripts/check-reachability.js            # Phase A only
 *   node infra/scripts/check-reachability.js --docker   # Phases A + B
 */
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const INFRA   = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const COMPOSE = ["compose", "-f", `${INFRA}/docker-compose.yml`];

const SAMPLES          = 3;
const FETCH_TIMEOUT_MS = 10_000;
// Playwright locator waits are 5s; median latency above this leaves no
// headroom for multi-navigation tests and predicts flake even if all probes pass.
const SLOW_MEDIAN_MS   = 2_000;

function baseUrl() {
    try {
        const cfg = JSON.parse(readFileSync(resolve(INFRA, "..", "local.config.json"), "utf8"));
        return cfg.wikiBaseUrl ?? "http://localhost:8080";
    } catch {
        return "http://localhost:8080";
    }
}

// Special pages must use /index.php/ — the short-URL rewrite is broken for them.
const PROBES = [
    { path: "/index.php/Main_Page",                       sentinel: "This page was last edited" },
    { path: "/index.php/DoikaytFieldGuide:Add_New_Tool",  sentinel: "This page was last edited" },
    // Must include a target page — PageForms returns HTTP 400 for a bare
    // Special:FormEdit/<form>. Same URL the e2e specs navigate to.
    { path: "/index.php/Special:FormEdit/Tool/PW_Validation_Test", sentinel: 'id="pfForm"' },
    { path: "/load.php?modules=site.styles&only=styles",  sentinel: "" },
];

let failures = 0;
const fail = (msg) => { failures++; console.error(`  ✗ ${msg}`); };
const ok   = (msg) => console.log(`  ✓ ${msg}`);

async function probe(url, sentinel) {
    const latencies = [];
    for (let i = 0; i < SAMPLES; i++) {
        const t0 = Date.now();
        let res, body;
        try {
            res  = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
            body = await res.text();
        } catch (e) {
            return fail(`${url} — network error on sample ${i + 1}: ${e.cause?.code ?? e.message}`);
        }
        latencies.push(Date.now() - t0);
        if (!res.ok) return fail(`${url} — HTTP ${res.status}`);
        if (sentinel && !body.includes(sentinel)) {
            return fail(`${url} — 200 but body is missing sentinel ${JSON.stringify(sentinel)}`);
        }
    }
    latencies.sort((a, b) => a - b);
    const median = latencies[Math.floor(latencies.length / 2)];
    const max    = latencies[latencies.length - 1];
    ok(`${url} — median ${median}ms, max ${max}ms`);
    if (median > SLOW_MEDIAN_MS) {
        fail(`${url} — median latency ${median}ms exceeds ${SLOW_MEDIAN_MS}ms; expect locator flake`);
    }
}

function docker(args, label) {
    const r = spawnSync("docker", args, { encoding: "utf8" });
    if (r.error?.code === "ENOENT") {
        fail(`docker CLI not found — run Phase B from the HOST: node infra/scripts/check-reachability.js --docker`);
        return null;
    }
    if (r.status !== 0) {
        fail(`${label} — ${(r.stderr || r.stdout || "").trim()}`);
        return null;
    }
    return r.stdout;
}

function phaseB() {
    console.log("Phase B: container-side checks");

    const psOut = docker([...COMPOSE, "ps", "--format", "json"], "docker compose ps");
    if (psOut === null) return;
    // `docker compose ps --format json` emits one JSON object per line
    const services = psOut.trim().split("\n").filter(Boolean).map((l) => JSON.parse(l));
    for (const name of ["mediawiki", "database"]) {
        const svc = services.find((s) => s.Service === name);
        if (!svc)                      { fail(`service "${name}" is not up`); continue; }
        if (svc.State !== "running")   { fail(`service "${name}" state is "${svc.State}"`); continue; }

        const inspect = docker(
            ["inspect", "--format", "{{.RestartCount}} {{.State.StartedAt}}", svc.Name ?? svc.ID],
            `docker inspect ${name}`,
        );
        if (inspect === null) continue;
        const [restarts, startedAt] = inspect.trim().split(" ");
        if (Number(restarts) > 0) {
            fail(`"${name}" has restarted ${restarts}× (restart:always masks crash loops) — check: docker logs`);
        } else {
            ok(`"${name}" running since ${startedAt}, 0 restarts`);
        }
    }

    // php is guaranteed in the mediawiki image; curl is not.
    const httpCheck =
        'echo @file_get_contents("http://localhost/index.php/Main_Page") ? "OK" : "FAIL";';
    const httpOut = docker(
        [...COMPOSE, "exec", "-T", "mediawiki", "php", "-r", httpCheck],
        "in-container HTTP check",
    );
    if (httpOut !== null) {
        httpOut.trim() === "OK"
            ? ok("in-container HTTP: Apache/PHP serving Main_Page")
            : fail("in-container HTTP: Apache up but Main_Page fetch failed (PHP/rewrite problem)");
    }

    const dbOut = docker(
        [...COMPOSE, "exec", "-T", "mediawiki", "php", "maintenance/run.php", "sql", "--query", "SELECT 1"],
        "in-container DB check",
    );
    if (dbOut !== null) ok("in-container DB: query succeeded");
}

const base = baseUrl();
console.log(`Phase A: host-side probes against ${base}`);
for (const { path, sentinel } of PROBES) {
    await probe(base + path, sentinel);
}

if (process.argv.includes("--docker")) phaseB();

if (failures > 0) {
    console.error(`\n${failures} reachability check(s) failed — fix before running Playwright.`);
    process.exit(1);
}
console.log("\nAll reachability checks passed.");
