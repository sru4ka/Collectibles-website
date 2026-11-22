// Builds the website into dist/. No packages to install: it only needs Node.
//
//   node build.mjs
//
// Each page is a small file in src/pages that exports its address, title,
// description and content. Everything in static/ is copied across unchanged.
import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { layout } from './src/layout.mjs';
import { SITE } from './src/site.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, 'dist');

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(path.join(root, 'static'), out, { recursive: true });
await cp(path.join(root, 'src', 'styles.css'), path.join(out, 'styles.css'));
await cp(path.join(root, 'src', 'main.js'), path.join(out, 'main.js'));

const pages = [];
for (const file of (await readdir(path.join(root, 'src', 'pages'))).sort()) {
  const page = (await import(pathToFileURL(path.join(root, 'src', 'pages', file)).href)).default;
  for (const field of ['path', 'title', 'description', 'body']) {
    if (!page[field]) throw new Error(`${file}: "${field}" is missing`);
  }
  // "/privacy/" is written to privacy/index.html; "/404.html" is written as it is.
  const target = page.path.endsWith('/') ? path.join(out, page.path, 'index.html') : path.join(out, page.path);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, layout(page));
  pages.push(page);
}

const listed = pages.filter((page) => page.path.endsWith('/'));
await writeFile(
  path.join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${listed.map((page) => `  <url><loc>${SITE.url}${page.path}</loc></url>`).join('\n')}
</urlset>
`,
);
await writeFile(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages into dist/: ${pages.map((page) => page.path).join('  ')}`);
