// The frame every page shares: the head, the top bar and the footer.
import { NAV, SITE } from './site.mjs';

const escape = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function layout({ path, title, description, body, bodyClass = '' }) {
  const fullTitle = path === '/' ? `${SITE.name}: ${title}` : `${title} | ${SITE.name}`;
  const canonical = `${SITE.url}${path}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(fullTitle)}</title>
  <meta name="description" content="${escape(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#F2E9D8">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${SITE.name}">
  <meta property="og:title" content="${escape(fullTitle)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE.url}/assets/og.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" href="/assets/favicon.png">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="preload" href="/assets/fraunces-600.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="stylesheet" href="/styles.css">
  <script>document.documentElement.classList.add('js')</script>
</head>
<body class="${bodyClass}">
  <a class="skip" href="#main">Skip to the content</a>
  <header class="bar">
    <div class="wrap bar-row">
      <a class="brand" href="/" aria-label="${SITE.name}, home">
        <img src="/assets/mark.svg" alt="" width="36" height="36">
        <span>${SITE.name}</span>
      </a>
      <nav aria-label="Main">
        ${NAV.map((item) => `<a href="${item.href}">${item.label}</a>`).join('\n        ')}
      </nav>
    </div>
  </header>
  <main id="main">
${body}
  </main>
  <footer class="foot">
    <div class="wrap foot-row">
      <a class="brand brand-small" href="/"><img src="/assets/mark.svg" alt="" width="28" height="28"><span>${SITE.name}</span></a>
      <nav aria-label="Footer">
        <a href="/privacy/">Privacy policy</a>
        <a href="/terms/">Terms of use</a>
        <a href="/support/">Support</a>
        <a href="/credits/">Photo credits</a>
      </nav>
      <p class="fine">&copy; ${SITE.year} ${SITE.name}. Values shown by Keepworth are estimates, not professional appraisals.</p>
    </div>
  </footer>
  <script src="/main.js" defer></script>
</body>
</html>
`;
}

/** A page of plain reading: a title, an optional note under it, then headed sections. */
export function article({ title, note, html }) {
  return `    <article class="wrap prose">
      <h1>${title}</h1>
      ${note ? `<p class="updated">${note}</p>` : ''}
${html}
    </article>`;
}
