#!/usr/bin/env node
// Consistency checks for governance/commons-hub-pattern.md (or any Markdown file passed in).
// Usage: node governance/check-doc.mjs [path]
// Checks: (1) internal #anchor links resolve to a heading slug or <a id>, (2) the table of
// contents lists exactly the document's headings, (3) footnote references and definitions
// match, (4) lines of 100+ characters outside code fences, tables, and link-only lines.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const path = process.argv[2] || join(here, 'commons-hub-pattern.md');
const text = readFileSync(path, 'utf8');
const lines = text.split('\n');

const stripLinks = (s) => s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
const slug = (s) => stripLinks(s).toLowerCase()
  .replace(/[^\p{L}\p{N} _-]/gu, '').replace(/ /g, '-');

let problems = 0;
const report = (kind, detail) => { problems++; console.log(`${kind}: ${detail}`); };

// Collect headings (outside fences) and explicit anchors.
let fence = false;
const headings = [];
const ids = new Set();
const seen = {};
lines.forEach((l, i) => {
  if (/^```/.test(l)) { fence = !fence; return; }
  if (fence) return;
  const m = /^(#{1,6}) (.*?)\s*$/.exec(l);
  if (m) {
    headings.push({ level: m[1].length, text: m[2], line: i + 1 });
    const s = slug(m[2]);
    seen[s] = (seen[s] || 0) + 1;
    ids.add(seen[s] > 1 ? `${s}-${seen[s] - 1}` : s);
  }
  for (const a of l.matchAll(/<a id="([^"]+)"/g)) ids.add(a[1]);
});

// (1) internal anchors
fence = false;
lines.forEach((l, i) => {
  if (/^```/.test(l)) { fence = !fence; return; }
  if (fence) return;
  for (const m of l.matchAll(/\]\(#([^)]+)\)/g)) {
    if (!ids.has(m[1])) report('BROKEN ANCHOR', `line ${i + 1}: #${m[1]}`);
  }
});

// (2) table of contents vs headings (H2+ after the ToC heading, excluding the ToC itself)
const tocIdx = lines.findIndex((l) => /^## Table of [Cc]ontents/.test(l));
if (tocIdx >= 0) {
  const end = lines.findIndex((l, i) => i > tocIdx && /^---\s*$/.test(l));
  const toc = lines.slice(tocIdx + 1, end).filter((l) => /^\s*- \[/.test(l))
    .map((l) => /^\s*- \[(.*)\]\(#([^)]*)\)\s*$/.exec(l)).filter(Boolean)
    .map((m) => ({ label: m[1], slug: m[2] }));
  const expected = headings.filter((h) => h.level >= 2 && h.line > end + 1)
    .map((h) => ({ label: stripLinks(h.text).trim(), slug: slug(h.text) }));
  if (toc.length !== expected.length) {
    report('TOC COUNT', `${toc.length} entries vs ${expected.length} headings`);
  }
  expected.forEach((e, i) => {
    const t = toc[i];
    if (!t || t.slug !== e.slug || t.label !== e.label) {
      report('TOC MISMATCH', `heading "${e.label}" vs entry "${t ? t.label : '(missing)'}"`);
    }
  });
}

// (3) footnotes
const [body, ...rest] = text.split(/\n## Footnotes/);
const foot = rest.join('\n## Footnotes');
const refs = new Set([...body.matchAll(/\[\^(\d+)\]/g)].map((m) => m[1]));
const defs = new Set([...foot.matchAll(/^\[\^(\d+)\]:/gm)].map((m) => m[1]));
for (const r of refs) if (!defs.has(r)) report('FOOTNOTE', `reference [^${r}] has no definition`);
for (const d of defs) if (!refs.has(d)) report('FOOTNOTE', `definition [^${d}] is never referenced`);

// (4) long lines
fence = false;
lines.forEach((l, i) => {
  if (/^```/.test(l)) { fence = !fence; return; }
  if (fence || l.length < 100) return;
  if (/^\s*\|/.test(l) || /^\s*<(tr|td|table|img|a )/.test(l) || /\]\(https?:/.test(l)) return;
  report('LONG LINE', `line ${i + 1}: ${l.length} chars`);
});

console.log(problems === 0 ? 'OK: no problems found' : `${problems} problem(s) found`);
process.exit(problems === 0 ? 0 : 1);
