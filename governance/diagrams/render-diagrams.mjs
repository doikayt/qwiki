#!/usr/bin/env node
// Render every diagrams/*.mmd (Mermaid source) to a PNG and an SVG next to it.
// The PNG is embedded inline; the SVG is the click-through, sharp at any zoom.
// Usage: node governance/diagrams/render-diagrams.mjs [name ...]
//   With no names, renders all .mmd files. Names are file stems, e.g. "dai-flows".
// Needs Mermaid CLI (mmdc) on PATH or in MMDC, and a Chromium: set CHROMIUM if it
// isn't at the NixOS system path.
import { spawnSync } from 'node:child_process';
import { readdirSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const mmdc = process.env.MMDC || 'mmdc';
const chromium = process.env.CHROMIUM || '/run/current-system/sw/bin/chromium';
const width = process.env.DIAGRAM_WIDTH || '1400';
const scale = process.env.DIAGRAM_SCALE || '2';

const tmp = mkdtempSync(join(tmpdir(), 'render-diagrams-'));
const puppeteerConfig = join(tmp, 'puppeteer.json');
writeFileSync(puppeteerConfig, JSON.stringify({
  executablePath: chromium,
  args: ['--no-sandbox', '--disable-gpu'],
}));

const wanted = process.argv.slice(2);
const sources = readdirSync(here)
  .filter((f) => f.endsWith('.mmd'))
  .filter((f) => wanted.length === 0 || wanted.includes(f.replace(/\.mmd$/, '')));

if (sources.length === 0) {
  console.error('No matching .mmd files found in', here);
  process.exit(1);
}

let failed = 0;
for (const file of sources) for (const ext of ['png', 'svg']) {
  const out = file.replace(/\.mmd$/, `.${ext}`);
  const r = spawnSync(mmdc, [
    '-p', puppeteerConfig,
    '-i', join(here, file),
    '-o', join(here, out),
    '-w', width,
    '-s', scale,
    '-b', 'white',
  ], { stdio: 'inherit' });
  if (r.status === 0) console.log(`rendered ${out}`);
  else { console.error(`FAILED ${file}`); failed++; }
}
process.exit(failed ? 1 : 0);
