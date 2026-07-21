import { devices } from "@playwright/test";
import { definePlaywrightConfig } from "@doikayt/typescript-build-config/playwright";
import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const _dir = dirname(fileURLToPath(import.meta.url));

function localBaseUrl(): string {
    try {
        const cfg = JSON.parse(readFileSync(resolve(_dir, "local.config.json"), "utf8"));
        return cfg.wikiBaseUrl ?? "http://localhost:8080";
    } catch {
        return "http://localhost:8080";
    }
}

export default definePlaywrightConfig({
    testDir: "code/tests/e2e",
    testMatch: "**/*.spec.ts",
    timeout: 20_000,
    use: {
        baseURL: localBaseUrl(),
        headless: true,
    },
    projects: [
        { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    ],
});
