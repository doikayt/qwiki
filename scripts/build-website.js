import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync, existsSync, statSync } from 'fs';
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

const SITE_URL = 'https://www.doikayt.org';

// Wiki base URL for links inside blog posts: local.config.json's
// wikiBaseUrl when present (same file infra/scripts/ensure-wiki.js and
// playwright.config.ts read), falling back to the production wiki's real
// domain otherwise. Lets a post write a link against {{WIKI_URL}} once
// and have it resolve correctly in both local preview and the live site.
const PROD_WIKI_URL = 'https://wiki.doikayt.org';
function resolveWikiUrl() {
  const configPath = resolve(ROOT, 'local.config.json');
  if (!existsSync(configPath)) return PROD_WIKI_URL;
  try {
    return JSON.parse(readFileSync(configPath, 'utf8')).wikiBaseUrl ?? PROD_WIKI_URL;
  } catch {
    return PROD_WIKI_URL;
  }
}
const WIKI_URL = resolveWikiUrl();
function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Auto-derived, zero-maintenance social preview metadata: first ~150 chars
// of rendered prose for the description, first image in the body (falling
// back to the site logo) for the preview image -- nothing to remember to
// fill in per post.
function extractDescription(html) {
  const text = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= 150) return text;
  const truncated = text.slice(0, 150);
  return truncated.slice(0, truncated.lastIndexOf(' ')) + '…';
}

function extractFirstImage(html) {
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  if (!match) return `${SITE_URL}/logo.png`;
  const src = match[1];
  return src.startsWith('http') ? src : `${SITE_URL}${src}`;
}

function withOgTags(template, { title, description, image, url }) {
  return template
    .replaceAll('{{OG_TITLE}}', escapeXml(title))
    .replaceAll('{{OG_DESCRIPTION}}', escapeXml(description))
    .replaceAll('{{OG_IMAGE}}', escapeXml(image))
    .replace('{{OG_URL}}', escapeXml(url));
}

// Both image dirs below (website-only content images and per-post blog
// images) are expected to be flat -- no subdirectories. A stray directory
// (e.g. a screenshot batch dropped in by mistake) would otherwise crash
// copyFileSync with a bare EISDIR pointing at internal fs code, giving no
// hint about which path caused it or why. Fail loudly here instead.
function copyFlatImages(srcDir, distDir) {
  for (const file of readdirSync(srcDir)) {
    const srcPath = resolve(srcDir, file);
    if (statSync(srcPath).isDirectory()) {
      throw new Error(
        `${srcPath} is a directory, but image dirs must contain flat files only ` +
        `-- nested folders aren't copied to dist/ and break the build. Move its ` +
        `contents up a level or remove it.`
      );
    }
    copyFileSync(srcPath, resolve(distDir, file));
  }
}

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
  copyFlatImages(IMAGES_SRC, IMAGES_DIST);
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
  const bodyHtml = parse(body);
  const html = withOgTags(
    template
      .replaceAll('{{PAGE_TITLE}}', pageTitle)
      .replace('{{TABS}}', buildTabsHtml(slug))
      .replace('{{BODY}}', bodyHtml),
    {
      title: pageTitle,
      description: extractDescription(bodyHtml),
      image: extractFirstImage(bodyHtml),
      url: `${SITE_URL}/${slug}.html`,
    }
  );
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
  copyFlatImages(imagesDir, BLOG_IMAGES_DIST);
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
      const body = (titleMatch ? content.replace(titleMatch[0], '') : content)
        .replaceAll('{{WIKI_URL}}', WIKI_URL);
      const tags = Array.isArray(data.tags) ? data.tags : [];
      return { slug, title, date: data.date, body, tags };
    })
    .sort((a, b) => (b.date ?? 0) - (a.date ?? 0));
}

function renderPost(post) {
  const bodyHtml = parse(post.body);
  const html = withOgTags(
    template
      .replaceAll('{{PAGE_TITLE}}', post.title)
      .replace('{{TABS}}', '')
      .replace('{{BODY}}', bodyHtml),
    {
      title: post.title,
      description: extractDescription(bodyHtml),
      image: extractFirstImage(bodyHtml),
      url: `${SITE_URL}/blog/${post.slug}.html`,
    }
  );
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
const indexBodyHtml = parse(indexBody);
const indexHtml = withOgTags(
  template
    .replaceAll('{{PAGE_TITLE}}', indexTitle)
    .replace('{{TABS}}', '')
    .replace('{{BODY}}', indexBodyHtml),
  {
    title: indexTitle,
    description: extractDescription(indexBodyHtml),
    image: extractFirstImage(indexBodyHtml),
    url: `${SITE_URL}/blog/index.html`,
  }
);
writeFileSync(resolve(BLOG_DIST, 'index.html'), indexHtml);

// RSS feed: newest Doikayt posts only (blog/posts/) -- the legacy
// datalackey.com archive is years old and would swamp "what's new" for
// anyone subscribing to stay current.
const feedItems = newPosts.slice(0, 20).map(post => {
  const link = `${SITE_URL}/blog/${post.slug}.html`;
  const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString();
  const categories = post.tags.map(tag => `    <category>${escapeXml(tag)}</category>`).join('\n');
  return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${link}</link>
    <guid isPermaLink="true">${link}</guid>
    <pubDate>${pubDate}</pubDate>
${categories ? categories + '\n' : ''}    <description><![CDATA[${parse(post.body)}]]></description>
  </item>`;
}).join('\n');

const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Doikayt Tech Blog</title>
  <link>${SITE_URL}/blog/index.html</link>
  <description>New posts from Doikayt Mobilization Labs.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${feedItems}
</channel>
</rss>
`;
writeFileSync(resolve(BLOG_DIST, 'feed.xml'), feedXml);

const blogPageCount = legacyPosts.length + newPosts.length;
console.log(`Built ${pages.length} pages → website/dist/`);
console.log(
  `Built ${blogPageCount} blog pages (${newPosts.length} new, ${legacyPosts.length} legacy) ` +
  `→ website/dist/blog/`
);
