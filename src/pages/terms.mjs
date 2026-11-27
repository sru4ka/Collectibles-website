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
        <li>Keepworth is free to download and comes with a small number of free scans each calendar month. After those, scanning requires a paid subscription. The price and the billing period are shown before you buy.</li>
        <li>The first free scans of a month show the full result. Later free scans say what the item is, and its value is shown with a subscription. Questions about an item are part of a subscription.</li>
        <li>Each plan allows a set number of scans in a week or a month, and a free trial a smaller number. The numbers are shown on the subscription screen before you buy.</li>
        <li>Payment is charged to your App Store or Google Play account when you confirm the purchase.</li>
        <li><b>A subscription renews automatically</b> for the same period and price unless you cancel at least 24 hours before the current period ends.</li>
        <li>If a free trial is offered, you are charged when it ends unless you cancel at least 24 hours before then.</li>
        <li>If a lower price is offered for the first period, the subscription renews at the full price shown beside it.</li>
        <li>You can manage or cancel a subscription at any time in your App Store or Google Play account settings. Deleting the app does not cancel it.</li>
        <li>Refunds are handled by Apple or Google under their own policies.</li>
      </ul>

      <h2>4. Fair use</h2>
      <ul>
        <li>You must be at least 13 years old to use Keepworth.</li>
        <li>Scan only items and photos you have the right to use.</li>
        <li>Do not use the app for anything unlawful, or upload anything unlawful or offensive.</li>
        <li>Do not try to break, overload or copy the service, or reach it by automated means. A daily scan limit applies to prevent misuse.</li>
      </ul>
      <p>We may suspend access for anyone who breaks these terms.</p>

      <h2>5. Sharing and the community</h2>
      <p>Sharing is optional. Nothing you scan or save is visible to anyone else unless you make your profile public, accept someone's request to follow you while it is private, or switch on sharing of your rare finds. You can change any of these at any time.</p>
      <ul>
        <li>If you choose a handle, other people using Keepworth can find you by it, see your profile picture and how many people follow you, and ask to follow you. If you have a subscription, they also see a PRO mark with your handle and picture. If your profile is public, they can also see the words on your profile, the photos, names, grades and rarity of the items you have saved, and the albums you choose to show. While it is private, only the followers you accept see those. They see what your items are worth only if you choose to show that too.</li>
        <li>If you switch on sharing of your rare finds, the name of a rare item you scan, your photo of it, your handle and your profile picture can be shown to other people using Keepworth, even while your profile is private.</li>
        <li>You are responsible for what you post: your handle, your profile picture and the words on your profile, your replies, and the photos and items in a collection you share.</li>
        <li><b>We do not tolerate objectionable content or abusive behaviour.</b> Do not post anything abusive, threatening, hateful, sexual, misleading or unlawful, do not post spam or advertising, do not pretend to be someone else, and do not post anyone's personal information.</li>
        <li>You can report a reply, an item or a collector, block a collector, and delete your own replies and any reply left on your items, all from inside the app. We review reports and act on them promptly. Something reported by several people may be hidden until we have looked at it.</li>
        <li>Photos, profile pictures, handles and the words on a profile are checked automatically, and ones that are not suitable are refused. Posting links or advertising, and sending many replies or likes in a short time, is limited.</li>
        <li>We may remove content and suspend or close accounts that break these rules, without notice.</li>
        <li>Be careful when you arrange to buy, sell or trade with someone you met through the app. Keepworth is not a party to any arrangement between collectors and does not check who anyone is.</li>
      </ul>
      <p>To tell us about something in the community, report it in the app or write to ${mail}.</p>

      <h2>6. Your photos and ours</h2>
      <ul>
        <li>Your photos remain yours. You give us permission to store and process them in order to provide the service to you, as described in the <a href="/privacy/">privacy policy</a>. If you share your collection or your rare finds, you also give us permission to show their photos to other people using the app for as long as you keep sharing them.</li>
        <li>The app, its text and its drawings belong to Keepworth. Photographs from other sources are credited on the <a href="/credits/">photo credits</a> page.</li>
      </ul>

      <h2>7. Changes and availability</h2>
      <p>We may change, pause or end the app or any part of it, and we may update these terms. If we update them we will change the date at the top of this page. We try to keep Keepworth available, but we cannot promise that it will always work or be free of errors.</p>

      <h2>8. Our responsibility to you</h2>
      <p>Keepworth is provided as it is. To the extent the law allows, we are not responsible for losses that result from relying on an identification or an estimate, including selling an item for less than it is worth or paying more than it is worth. Nothing in these terms limits any rights you have under consumer protection law that cannot be limited.</p>

      <h2>9. App Store and Google Play</h2>
      <p>If you downloaded the app from Apple's App Store, Apple's <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noopener">Licensed Application End User License Agreement</a> also applies. Apple and Google are not responsible for the app or its content, and are not parties to these terms.</p>

      <h2>10. Contact</h2>
      <p>Questions about these terms: ${mail}.</p>`;

export default {
  path: '/terms/',
  title: 'Terms of use',
  description: 'The terms for using Keepworth: what its estimates are and are not, how subscriptions work, and fair use.',
  body: article({ title: 'Terms of use', note: `Last updated ${SITE.legalUpdated}`, html }),
};
