# Keepworth website

The public website for the Keepworth app, served at https://keepworthapp.com.

| Page | Address | What it is for |
|---|---|---|
| Home | `/` | What the app does, with screens from the app |
| Privacy policy | `/privacy/` | Required by Apple and Google for every app |
| Terms of use | `/terms/` | Required for apps with subscriptions |
| Support | `/support/` | Common questions and the contact address |
| Photo credits | `/credits/` | Credits for the photographs on the site |

## Build and preview

The site is plain HTML and CSS, put together by one small script. It needs
Node and nothing else: there are no packages to install.

```bash
node build.mjs
```

That writes the finished site to `dist/`. To look at it:

```bash
npx serve dist
```

## Where things are

```
build.mjs          puts the pages together into dist/
src/site.mjs       the name, web address, contact email and "last updated" date
src/layout.mjs     the top bar and footer every page shares
src/pages/         one file for each page
src/styles.css     the look: the same paper, ink and seal red as the app
src/main.js        fades sections in as they scroll into view
static/assets/     images, the logo and the heading font, copied as they are
```

## Hosting

The site is a static site on Render, built with `node build.mjs` and published
from `dist`. Render rebuilds it every time this branch changes on GitHub.

To serve it at keepworthapp.com, the domain has to be added to the site in
Render (Settings, Custom Domains), and two records set in GoDaddy's DNS page.
Render shows the exact values when the domain is added; they should be:

| Type | Name | Value |
|---|---|---|
| A | `@` | `216.24.57.1` |
| CNAME | `www` | the site's `onrender.com` address |

Any A record or "parked" forwarding that GoDaddy created for `@` has to be
removed first, or the domain keeps showing GoDaddy's parking page.

## Before launch

- **The contact address.** `supportEmail` in `src/site.mjs` is shown on three
  pages. It must be a mailbox someone reads. Set up forwarding for it, or
  change it to an address that already works.
- **The legal pages.** The privacy policy and the terms were written to match
  what the app does, but they have not been reviewed by a lawyer. Have them
  checked, and add the legal name of whoever operates Keepworth if the law
  where you are requires it.
- **Keep the privacy policy true.** It names the companies that process data
  for the app (Anthropic, Supabase, RevenueCat, Expo). If the app starts or
  stops using a service, change the policy and its "last updated" date.
- **Prices on the home page.** The four finds and their prices are copied from
  the app's hunt list (`src/lib/finds.ts` in the app). Update both together.
- **The store button.** The home page says "Coming soon to iPhone". Replace it
  with a link to the App Store once the app is live.

## Photographs

The four photographs on the home page are Creative Commons licensed and are
credited on `/credits/`. Add a line there for any photograph added to the site.
