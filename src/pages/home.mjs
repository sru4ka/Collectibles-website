// The home page.
import { SITE } from '../site.mjs';

// A few entries from the app's hunt list. The prices are typical selling
// prices checked in November 2026 (see src/lib/finds.ts in the app). They go
// out of date: update them here whenever they are updated in the app.
const FINDS = [
  {
    img: 'find-us-1955-ddo.jpg',
    name: '1955 Lincoln cent, doubled die',
    worth: '$1,400 – $2,300 USD',
    how: 'The date and lettering look plainly doubled, as if printed twice.',
  },
  {
    img: 'find-us-1909-s-vdb.jpg',
    name: '1909-S VDB Lincoln cent',
    worth: '$700 – $1,200 USD',
    how: 'A small S under the date, and the initials V.D.B. on the back.',
  },
  {
    img: 'find-ca-silver.jpg',
    name: 'Canadian silver dimes and quarters',
    worth: 'Several times face value',
    how: 'Dated 1966 or earlier: the coin is at least 80% silver.',
  },
  {
    img: 'find-antique-cast-iron.jpg',
    name: 'Griswold cast-iron pans',
    worth: '$60 – $150 USD',
    how: 'Turn the pan over and look for the name inside a cross.',
    square: true,
  },
];

const body = `    <section class="hero">
      <div class="wrap hero-row">
        <div>
          <h1>${SITE.tagline}</h1>
          <p class="lede">Snap a photo of a coin, a trading card or an antique. Keepworth tells you what it is, what it typically sells for, and whether to sell it, keep it or get it graded.</p>
          <p class="soon">Coming soon to iPhone</p>
          <p class="soon-note">Android will follow.</p>
        </div>
        <div class="phone float"><img src="/assets/screen-home.webp" width="640" height="1385" alt="The Keepworth home screen, with a Scan an item button"></div>
      </div>
    </section>

    <section class="section" id="how">
      <div class="wrap">
        <span class="kicker">How it works</span>
        <h2>Three steps, a few seconds</h2>
        <ol class="steps">
          <li class="reveal"><h3>Snap it</h3><p>A coin, a trading card or an old object. Front and back, guided by the camera.</p></li>
          <li class="reveal"><h3>See what it's worth</h3><p>An honest price range and a plain answer: sell it, keep it or get it graded.</p></li>
          <li class="reveal"><h3>Watch it add up</h3><p>Save what you find to your collection and keep a running total.</p></li>
        </ol>
      </div>
    </section>

    <section class="section">
      <div class="wrap split">
        <div class="reveal">
          <span class="kicker">What a scan tells you</span>
          <h2>More than a number</h2>
          <ul class="ticks">
            <li><b>What it is.</b> The name, year, country or set, and the details that matter.</li>
            <li><b>An honest range.</b> A low and a high, not one hopeful number, with how sure Keepworth is.</li>
            <li><b>A plain verdict.</b> Sell it, keep it or get it graded, and where it would sell best.</li>
            <li><b>What would change the value.</b> The mint mark, the error or the centring to check for.</li>
            <li><b>Real sold listings.</b> One tap to see what the same item has actually sold for.</li>
          </ul>
        </div>
        <div class="phone reveal"><img src="/assets/screen-value.webp" width="640" height="1385" loading="lazy" alt="A scan result showing a coin, its estimated value range and a verdict"></div>
      </div>
    </section>

    <section class="section" id="hunt">
      <div class="wrap">
        <span class="kicker">The hunt list</span>
        <h2>Worth looking for</h2>
        <p class="intro">Real coins, cards and household finds that still turn up in change, jars, binders and drawers. The app shows how to spot each one, with a new find every day.</p>
        <div class="finds">
${FINDS.map(
  (find) => `          <div class="find reveal">
            <img${find.square ? ' class="square"' : ''} src="/assets/${find.img}" width="168" height="168" loading="lazy" alt="">
            <div>
              <h3>${find.name}</h3>
              <p class="worth">${find.worth}</p>
              <p class="how">${find.how}</p>
            </div>
          </div>`,
).join('\n')}
        </div>
        <p class="small">Typical selling prices for worn examples, checked in November 2026. Prices change, and most of what turns up is the ordinary version. Photographs are credited on the <a href="/credits/">photo credits</a> page.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <span class="kicker">Honest by design</span>
        <h2>It says so when it isn't sure</h2>
        <div class="points">
          <div class="point reveal"><h3>No guessing</h3><p>When a photo isn't clear enough to be sure, Keepworth asks for a better one instead of making up a value.</p></div>
          <div class="point reveal"><h3>Estimates, not appraisals</h3><p>Every value is an estimate from past sales. For anything that looks valuable, have a dealer or appraiser see it in person.</p></div>
          <div class="point reveal"><h3>No ads, no tracking</h3><p>Your photos are used to identify your item and to answer your questions about it. Other people see them only if you choose to share them. They are never used for advertising. See the <a href="/privacy/">privacy policy</a>.</p></div>
        </div>
      </div>
    </section>`;

export default {
  path: '/',
  title: 'Find out what your coins, cards and antiques are worth',
  description:
    'Snap a photo of a coin, a trading card or an antique. Keepworth tells you what it is, what it typically sells for, and whether to sell it, keep it or get it graded.',
  body,
};
