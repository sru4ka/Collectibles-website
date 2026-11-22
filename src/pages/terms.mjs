// The terms of use. Change SITE.legalUpdated when they change.
import { article } from '../layout.mjs';
import { SITE } from '../site.mjs';

const mail = `<a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

const html = `
      <div class="summary">
        <p><b>The short version.</b> Keepworth gives estimates, not professional appraisals, and cannot confirm that an item is genuine. Subscriptions renew automatically until you cancel them in your App Store or Google Play account.</p>
      </div>

      <h2>1. Using Keepworth</h2>
      <p>These terms are an agreement between you and Keepworth ("we", "us"), the developer of the Keepworth app. By using the app you agree to them. If you do not agree, please do not use the app.</p>

      <h2>2. What Keepworth does and does not do</h2>
      <ul>
        <li>Keepworth identifies coins, trading cards, antiques and similar items from your photos and estimates what they sell for.</li>
        <li><b>Every value is an estimate, not a professional appraisal.</b> It is based on typical past sales and on what can be seen in your photos. The real price of your item may be higher or lower.</li>
        <li><b>A photo cannot confirm that an item is genuine.</b> Keepworth does not authenticate items.</li>
        <li>Keepworth is not financial, investment, insurance or legal advice. Do not rely on it alone when you buy, sell or insure something. For anything that looks valuable, have a dealer or appraiser examine it in person.</li>
        <li>Identifications are made by an AI model and can be wrong.</li>
      </ul>

      <h2>3. Subscriptions</h2>
      <ul>
        <li>Scanning requires a paid subscription. The price and the billing period are shown before you buy.</li>
        <li>Payment is charged to your App Store or Google Play account when you confirm the purchase.</li>
        <li><b>A subscription renews automatically</b> for the same period and price unless you cancel at least 24 hours before the current period ends.</li>
        <li>If a free trial is offered, you are charged when it ends unless you cancel before then.</li>
        <li>You can manage or cancel a subscription at any time in your App Store or Google Play account settings. Deleting the app does not cancel it.</li>
        <li>Refunds are handled by Apple or Google under their own policies.</li>
      </ul>

      <h2>4. Fair use</h2>
      <ul>
        <li>Scan only items and photos you have the right to use.</li>
        <li>Do not use the app for anything unlawful, or upload anything unlawful or offensive.</li>
        <li>Do not try to break, overload or copy the service, or reach it by automated means. A daily scan limit applies to prevent misuse.</li>
      </ul>
      <p>We may suspend access for anyone who breaks these terms.</p>

      <h2>5. Your photos and ours</h2>
      <ul>
        <li>Your photos remain yours. You give us permission to store and process them in order to provide the service to you, as described in the <a href="/privacy/">privacy policy</a>.</li>
        <li>The app, its text and its drawings belong to Keepworth. Photographs from other sources are credited on the <a href="/credits/">photo credits</a> page.</li>
      </ul>

      <h2>6. Changes and availability</h2>
      <p>We may change, pause or end the app or any part of it, and we may update these terms. If we update them we will change the date at the top of this page. We try to keep Keepworth available, but we cannot promise that it will always work or be free of errors.</p>

      <h2>7. Our responsibility to you</h2>
      <p>Keepworth is provided as it is. To the extent the law allows, we are not responsible for losses that result from relying on an identification or an estimate, including selling an item for less than it is worth or paying more than it is worth. Nothing in these terms limits any rights you have under consumer protection law that cannot be limited.</p>

      <h2>8. App Store and Google Play</h2>
      <p>If you downloaded the app from Apple's App Store, Apple's <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noopener">Licensed Application End User License Agreement</a> also applies. Apple and Google are not responsible for the app or its content, and are not parties to these terms.</p>

      <h2>9. Contact</h2>
      <p>Questions about these terms: ${mail}.</p>`;

export default {
  path: '/terms/',
  title: 'Terms of use',
  description: 'The terms for using Keepworth: what its estimates are and are not, how subscriptions work, and fair use.',
  body: article({ title: 'Terms of use', note: `Last updated ${SITE.legalUpdated}`, html }),
};
