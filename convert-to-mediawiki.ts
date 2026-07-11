/**
 * convert-to-mediawiki.ts
 *
 * Converts Markdown files with YAML front matter to a single MediaWiki XML
 * export document suitable for Special:Import / importDump.php.
 *
 * RUN FROM: the repository root (the directory containing this file).
 * Paths are resolved against process.cwd(), NOT the script's own location.
 *
 * Usage:
 *   npx tsx convert-to-mediawiki.ts
 *   npx tsx convert-to-mediawiki.ts ./my-content-dir
 *   npx tsx convert-to-mediawiki.ts ./my-content-dir ./output.xml
 *
 * Defaults:
 *   input:  ./spike-content
 *   output: ./spike-content-import.xml
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import matter from 'gray-matter';
import { convert } from 'pandoc-wasm';
import { create } from 'xmlbuilder2';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Producer: parseFrontMatter()
 * Consumer: processFile()
 * Trigger: CLI invocation, once per .md file discovered
 * Branching: raw===true skips pandoc and category injection; false uses both
 */
interface ParsedFile {
  filePath: string;
  title: string;
  categories: string[];
  raw: boolean;
  body: string;
}

/**
 * Producer: processFile()
 * Consumer: buildXml()
 * Trigger: each ParsedFile passed through processFile()
 */
interface ConvertedPage {
  title: string;
  body: string;
}

// ---------------------------------------------------------------------------
// File discovery
// ---------------------------------------------------------------------------

function findMarkdownFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMarkdownFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Front matter parsing
// ---------------------------------------------------------------------------

function parseFrontMatter(filePath: string): ParsedFile {
  const rawContent = readFileSync(filePath, { encoding: 'utf8' });

  let parsed: matter.GrayMatterFile<string>;
  try {
    parsed = matter(rawContent);
  } catch (err) {
    throw new Error(`Malformed YAML front matter in ${filePath}: ${String(err)}`);
  }

  const data = parsed.data as Record<string, unknown>;

  if (data['title'] === undefined || data['title'] === null) {
    throw new Error(`Missing required field "title" in ${filePath}`);
  }
  if (typeof data['title'] !== 'string' || data['title'] === '') {
    throw new Error(`Field "title" must be a non-empty string in ${filePath}`);
  }

  const categories: string[] = Array.isArray(data['categories'])
    ? (data['categories'] as unknown[]).filter((c): c is string => typeof c === 'string')
    : [];

  return {
    filePath: filePath,
    title: data['title'],
    categories: categories,
    raw: data['raw'] === true,
    body: parsed.content,
  };
}

// ---------------------------------------------------------------------------
// Conversion
// ---------------------------------------------------------------------------

async function processFile(parsed: ParsedFile): Promise<ConvertedPage> {
  if (parsed.raw === true) {
    return {
      title: parsed.title,
      body: parsed.body,
    };
  }

  const result = await convert({ from: 'markdown', to: 'mediawiki' }, parsed.body);

  let body = result.stdout;

  if (parsed.categories.length > 0) {
    const categoryLines = parsed.categories
      .map((cat: string): string => `[[Category:${cat}]]`)
      .join('\n');
    body = body.trimEnd() + '\n\n' + categoryLines + '\n';
  }

  return {
    title: parsed.title,
    body: body,
  };
}

// ---------------------------------------------------------------------------
// Namespace resolution
// ---------------------------------------------------------------------------

const NAMESPACE_MAP: Record<string, number> = {
  MediaWiki: 8,
  Template: 10,
  Help: 12,
  Category: 14,
};

function resolveNamespace(title: string): number {
  const colon = title.indexOf(':');
  if (colon === -1) return 0;
  return NAMESPACE_MAP[title.slice(0, colon)] ?? 0;
}

function resolveContentModel(title: string): { model: string; format: string } {
  if (title.endsWith('.css')) return { model: 'css', format: 'text/css' };
  if (title.endsWith('.js')) return { model: 'javascript', format: 'text/javascript' };
  return { model: 'wikitext', format: 'text/x-wiki' };
}

// ---------------------------------------------------------------------------
// XML assembly
// ---------------------------------------------------------------------------

function buildXml(pages: ConvertedPage[]): string {
  const timestamp = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');

  const doc = create({ version: '1.0', encoding: 'UTF-8' });
  const root = doc.ele('mediawiki', {
    'xmlns': 'http://www.mediawiki.org/xml/export-0.11/',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation': 'http://www.mediawiki.org/xml/export-0.11/ http://www.mediawiki.org/xml/export-0.11.xsd',
    'version': '0.11',
    'xml:lang': 'en',
  });

  const siteinfo = root.ele('siteinfo');
  siteinfo.ele('sitename').txt('Doikayt');
  siteinfo.ele('base').txt('http://localhost:8080/index.php/Main_Page');
  siteinfo.ele('generator').txt('doikayt-converter');
  siteinfo.ele('case').txt('first-letter');
  const namespaces = siteinfo.ele('namespaces');
  namespaces.ele('namespace', { key: '0', case: 'first-letter' });
  namespaces.ele('namespace', { key: '8', case: 'first-letter' }).txt('MediaWiki');
  namespaces.ele('namespace', { key: '10', case: 'first-letter' }).txt('Template');
  namespaces.ele('namespace', { key: '12', case: 'first-letter' }).txt('Help');
  namespaces.ele('namespace', { key: '14', case: 'first-letter' }).txt('Category');

  for (const page of pages) {
    const ns = resolveNamespace(page.title);
    const pageEl = root.ele('page');
    pageEl.ele('title').txt(page.title);
    pageEl.ele('ns').txt(String(ns));
    const revision = pageEl.ele('revision');
    revision.ele('timestamp').txt(timestamp);
    const contributor = revision.ele('contributor');
    contributor.ele('username').txt('Importer');
    const { model, format } = resolveContentModel(page.title);
    revision.ele('model').txt(model);
    revision.ele('format').txt(format);
    const bytes = Buffer.byteLength(page.body, 'utf8');
    revision
      .ele('text', { bytes: String(bytes), 'xml:space': 'preserve' })
      .txt(page.body);
  }

  return doc.end({ prettyPrint: true });
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const inputArg = process.argv[2];
  const outputArg = process.argv[3];

  const inputDir =
    inputArg !== undefined
      ? resolve(process.cwd(), inputArg)
      : resolve(process.cwd(), 'spike-content');

  const outputFile =
    outputArg !== undefined
      ? resolve(process.cwd(), outputArg)
      : resolve(process.cwd(), 'spike-content-import.xml');

  const mdFiles = findMarkdownFiles(inputDir);

  if (mdFiles.length === 0) {
    throw new Error(`No .md files found under: ${inputDir}`);
  }

  console.log(`Found ${mdFiles.length} file(s) under: ${inputDir}`);

  const parsedFiles = mdFiles.map((filePath: string): ParsedFile =>
    parseFrontMatter(filePath)
  );

  const convertedPages: ConvertedPage[] = [];
  for (const parsed of parsedFiles) {
    process.stdout.write(`  [${parsed.raw ? 'raw' : 'pandoc'}] ${parsed.title}\n`);
    convertedPages.push(await processFile(parsed));
  }

  const xml = buildXml(convertedPages);
  writeFileSync(outputFile, xml, { encoding: 'utf8' });

  console.log(`\nWrote ${convertedPages.length} page(s) to: ${outputFile}`);
}

main().catch((err: unknown): void => {
  process.stderr.write(`Error: ${String(err)}\n`);
  process.exit(1);
});
