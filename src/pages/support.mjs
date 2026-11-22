// The support page: answers to common questions, and how to reach us.
import { article } from '../layout.mjs';
import { SITE } from '../site.mjs';

const mail = `<a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

const html = `
      <div class="summary">
        <p><b>Need help?</b> Email ${mail}. The quickest way is from the app: open Settings, then Contact support. That adds your app version and account ID, so we can help without asking for them.</p>
      </div>

      <h2>Scanning</h2>
      <h3>How do I get a good result?</h3>
      <ul>
        <li>Use daylight from a window, not the flash.</li>
        <li>Put the item on a plain, dark surface and fill the guide on the screen.</li>
        <li>Photograph both sides. The back often carries the date, number or maker's mark.</li>
        <li>For an antique, start with the whole object, then take a close photo of any mark, label or signature.</li>
      </ul>
      <h3>Why did it ask for a better photo?</h3>
      <p>When Keepworth cannot see enough to be sure what an item is, it asks for another photo instead of guessing a value. The scan is not counted.</p>
      <h3>Should I clean a coin before scanning it?</h3>
      <p>No. Cleaning a coin lowers its value and cannot be undone. Scan it exactly as you found it.</p>

      <h2>Values</h2>
      <h3>How accurate are the values?</h3>
      <p>Every value is an estimate, shown as a low-to-high range based on what similar items have sold for. It is for the item as it looks in your photos. It is not a professional appraisal, and a photo cannot confirm that an item is genuine. For anything that looks valuable, have a dealer or appraiser examine it in person before you sell.</p>
      <h3>What do "sell", "keep" and "get it graded" mean?</h3>
      <ul>
        <li><b>Sell:</b> the item has real resale value.</li>
        <li><b>Keep:</b> selling would not be worth the effort, or it is worth more kept.</li>
        <li><b>Get it graded:</b> a professional grade would likely add more than the grading fee costs.</li>
      </ul>

      <h2>Subscription</h2>
      <h3>How do I cancel or change my subscription?</h3>
      <ul>
        <li><b>iPhone:</b> open the Settings app, tap your name, then Subscriptions, then Keepworth.</li>
        <li><b>Android:</b> open Google Play, tap your profile picture, then Payments and subscriptions, then Subscriptions.</li>
      </ul>
      <p>Deleting the app does not cancel a subscription.</p>
      <h3>How do I get a refund?</h3>
      <p>Refunds are handled by Apple or Google. On iPhone, go to <a href="https://reportaproblem.apple.com" rel="noopener">reportaproblem.apple.com</a>.</p>

      <h2>Your data</h2>
      <h3>How do I delete my data?</h3>
      <p>Email ${mail} from the app (Settings, then Contact support) and ask us to delete your account. We will delete it and everything linked to it. See the <a href="/privacy/">privacy policy</a> for what Keepworth collects.</p>`;

export default {
  path: '/support/',
  title: 'Support',
  description: 'Help with Keepworth: taking good photos, what the values mean, subscriptions, deleting your data, and how to contact us.',
  body: article({ title: 'Support', html }),
};
