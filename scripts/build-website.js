import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { marked, parse } from 'marked';
import matter from 'gray-matter';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = resolve(ROOT, 'website/src');
const DIST = resolve(ROOT, 'website/dist');
const BLOG_SRC = resolve(ROOT, 'website/blog');
const BLOG_DIST = resolve(DIST, 'blog');

// Give every heading an id so pages can be deep-linked (e.g. projects.html#qwiki).
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

marked.use({
  renderer: {
    heading(token) {
      const html = this.parser.parseInline(token.tokens);
      const id = slugify(token.text);
      return `<h${token.depth} id="${id}">${html}</h${token.depth}>\n`;
    }
  }
});

const GITHUB_REPO = 'https://github.com/doikayt/qwiki';
const commit = execSync('git rev-parse HEAD', { cwd: ROOT }).toString().trim();
const commitLink = `<a href="${GITHUB_REPO}/commit/${commit}">${commit.slice(0, 7)}</a>`;

const template = readFileSync(resolve(ROOT, 'website/template.html'), 'utf8')
  .replace('{{BUILD_COMMIT_LINK}}', commitLink);

mkdirSync(DIST, { recursive: true });

copyFileSync(resolve(SRC, 'styles.css'), resolve(DIST, 'styles.css'));
copyFileSync(resolve(ROOT, 'docs/assets/doikayt-logo.png'), resolve(DIST, 'logo.png'));

// Website-only content images (e.g. About/home page photos) -- distinct from
// docs/assets/, which holds the site logo, and infra/images/, which is
// MediaWiki's own upload storage and gets wiped by factory-reset.sh.
const IMAGES_SRC = resolve(SRC, 'images');
if (existsSync(IMAGES_SRC)) {
  const IMAGES_DIST = resolve(DIST, 'images');
  mkdirSync(IMAGES_DIST, { recursive: true });
  for (const file of readdirSync(IMAGES_SRC)) {
    copyFileSync(resolve(IMAGES_SRC, file), resolve(IMAGES_DIST, file));
  }
}

// Pages sharing a horizontal sub-nav; order here sets tab order.
const ABOUT_TABS = [
  { slug: 'about', label: 'Our Name' },
  { slug: 'about-mission', label: 'Mission' },
  { slug: 'about-company-structure', label: 'Structure' },
  { slug: 'about-people', label: 'People & Culture' },
  { slug: 'about-founders-statement', label: "Founder's Statement" },
];

function buildTabsHtml(slug) {
  if (!ABOUT_TABS.some(t => t.slug === slug)) return '';
  const links = ABOUT_TABS.map(t => {
    const cls = t.slug === slug ? ' class="active"' : '';
    return `<a href="/${t.slug}.html"${cls}>${t.label}</a>`;
  }).join('\n    ');
  return `<nav class="about-tabs">\n    ${links}\n  </nav>`;
}

const pages = readdirSync(SRC).filter(f => f.endsWith('.md'));
for (const file of pages) {
  const slug = basename(file, '.md');
  const md = readFileSync(resolve(SRC, file), 'utf8');
  const titleMatch = md.match(/^#[ \t]+(.+)$/m);
  const pageTitle = titleMatch ? titleMatch[1] : slug;
  const body = titleMatch ? md.replace(titleMatch[0], '') : md;
  const html = template
    .replaceAll('{{PAGE_TITLE}}', pageTitle)
    .replace('{{TABS}}', buildTabsHtml(slug))
    .replace('{{BODY}}', parse(body));
  writeFileSync(resolve(DIST, `${slug}.html`), html);
}

// Blog: new Doikayt posts (blog/posts/) and archived datalackey.com posts
// (blog/legacy/) are kept in separate source folders but render to a flat
// website/dist/blog/<slug>.html either way. index.md lists both groups via
// {{NEW_POSTS}}/{{LEGACY_POSTS}} placeholders filled in from frontmatter, so
// adding or removing a post file is enough -- no manual index editing.
mkdirSync(BLOG_DIST, { recursive: true });

const BLOG_LEGACY_SRC = resolve(BLOG_SRC, 'legacy');
const BLOG_POSTS_SRC = resolve(BLOG_SRC, 'posts');
const BLOG_IMAGES_DIST = resolve(BLOG_DIST, 'images');

function copyBlogImages(postsDir) {
  const imagesDir = resolve(postsDir, 'images');
  if (!existsSync(imagesDir)) return;
  mkdirSync(BLOG_IMAGES_DIST, { recursive: true });
  for (const file of readdirSync(imagesDir)) {
    copyFileSync(resolve(imagesDir, file), resolve(BLOG_IMAGES_DIST, file));
  }
}
copyBlogImages(BLOG_LEGACY_SRC);
copyBlogImages(BLOG_POSTS_SRC);

function loadPosts(postsDir) {
  if (!existsSync(postsDir)) return [];
  return readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const slug = basename(file, '.md');
      const raw = readFileSync(resolve(postsDir, file), 'utf8');
      const { data, content } = matter(raw);
      const titleMatch = content.match(/^#[ \t]+(.+)$/m);
      const title = data.title || (titleMatch ? titleMatch[1] : slug);
      const body = titleMatch ? content.replace(titleMatch[0], '') : content;
      return { slug, title, date: data.date, body };
    })
    .sort((a, b) => (b.date ?? 0) - (a.date ?? 0));
}

function renderPost(post) {
  const html = template
    .replaceAll('{{PAGE_TITLE}}', post.title)
    .replace('{{TABS}}', '')
    .replace('{{BODY}}', parse(post.body));
  writeFileSync(resolve(BLOG_DIST, `${post.slug}.html`), html);
}

const legacyPosts = loadPosts(BLOG_LEGACY_SRC);
const newPosts = loadPosts(BLOG_POSTS_SRC);
[...legacyPosts, ...newPosts].forEach(renderPost);

function formatDate(date) {
  return date ? date.toISOString().slice(0, 10) : '';
}

function renderPostListMarkdown(posts, emptyMessage) {
  if (posts.length === 0) return emptyMessage;
  return posts.map(p => {
    const dateStr = formatDate(p.date);
    return `- ${dateStr ? dateStr + ' — ' : ''}[${p.title}](/blog/${p.slug}.html)`;
  }).join('\n');
}

const indexRaw = readFileSync(resolve(BLOG_SRC, 'index.md'), 'utf8')
  .replace('{{NEW_POSTS}}', renderPostListMarkdown(newPosts, 'No posts yet — check back soon.'))
  .replace('{{LEGACY_POSTS}}', renderPostListMarkdown(legacyPosts, ''));
const indexTitleMatch = indexRaw.match(/^#[ \t]+(.+)$/m);
const indexTitle = indexTitleMatch ? indexTitleMatch[1] : 'Blog';
const indexBody = indexTitleMatch ? indexRaw.replace(indexTitleMatch[0], '') : indexRaw;
const indexHtml = template
  .replaceAll('{{PAGE_TITLE}}', indexTitle)
  .replace('{{TABS}}', '')
  .replace('{{BODY}}', parse(indexBody));
writeFileSync(resolve(BLOG_DIST, 'index.html'), indexHtml);

const blogPageCount = legacyPosts.length + newPosts.length;
console.log(`Built ${pages.length} pages → website/dist/`);
console.log(
  `Built ${blogPageCount} blog pages (${newPosts.length} new, ${legacyPosts.length} legacy) ` +
  `→ website/dist/blog/`
);
