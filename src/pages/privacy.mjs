// The privacy policy. It has to match what the app really does: check it
// against the app before every release, and change SITE.legalUpdated when it changes.
import { article } from '../layout.mjs';
import { SITE } from '../site.mjs';

const mail = `<a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`;

const html = `
      <div class="summary">
        <p><b>The short version.</b> Keepworth needs the photos you take in order to identify your item. It does not ask for your name, show ads, track you across other apps, or sell your information. You can have your data deleted at any time.</p>
      </div>

      <h2>Who this covers</h2>
      <p>This policy covers the Keepworth app and this website. "Keepworth", "we" and "us" mean the developer of the app. You can reach us at ${mail}.</p>

      <h2>What we collect</h2>
      <h3>Things you give the app</h3>
      <ul>
        <li><b>Photos you scan.</b> The pictures you take, or choose from your library, of the item you want identified.</li>
        <li><b>Your scans and collection.</b> The results of your scans, and the items you save to your collection.</li>
        <li><b>Your settings.</b> The currency you choose and the country your phone is set to, so that values and links suit where you are.</li>
      </ul>
      <h3>Things created automatically</h3>
      <ul>
        <li><b>Your account.</b> The first time you open the app it creates an account identified by a random ID. If you sign in with Apple, with Google, or with an email address and a password, we keep the email address that comes with it, so that you can get back to your account from another phone. With Apple you can choose to hide your own address. With Google we also receive the name and picture on your Google account; the app does not use or show them. A password is kept only in a scrambled form that we cannot read. We do not ask for your phone number.</li>
        <li><b>Subscription status.</b> Whether you have an active subscription, which plan it is, and how many scans you have used against it. Payments are handled by Apple or Google; we never see your card details.</li>
        <li><b>A phone ID.</b> A random ID the app makes and keeps on your phone, so that free scans are counted per phone. It says nothing about you and is not used for advertising or to follow you anywhere else.</li>
        <li><b>Technical records.</b> Like most online services, our servers record basic details of each request, such as the time, your IP address and the app version, to keep the service running and to stop abuse.</li>
      </ul>
      <h3>Things we do not collect</h3>
      <ul>
        <li>Your contacts, your precise location, or your other photos.</li>
        <li>Advertising identifiers. The app has no ads and no advertising or analytics trackers.</li>
        <li>The answers you give in the app's introduction. They stay on your phone.</li>
      </ul>

      <h3>Things other people can see</h3>
      <p>What other people can see depends on whether you have chosen a handle, and on whether your profile is private or public. Until you choose a handle, nobody can find you and nothing of yours is shown to anyone.</p>
      <ul>
        <li><b>A private profile.</b> Every profile starts private. Once you have a handle, other people using Keepworth can find you by it, see your handle and your profile picture, and see how many people follow you and how many you follow. They can ask to follow you. Nothing else of yours is shown to anyone unless you accept their request: a follower you accept sees what a public profile shows everyone.</li>
        <li><b>A public profile.</b> If you turn this on, anyone using Keepworth can see your handle, a few words about yourself, your profile picture, and your collection: the photos, names, grades and rarity of the items you have saved, including items you add by hand, and the albums you choose to show, by name. What your items are worth is shown only if you turn that on as well.</li>
        <li><b>Your scans in the feed.</b> While your profile is public, items you scan and save can appear in a feed that everyone using Keepworth sees, unless you turn that off. The people who follow you see them either way.</li>
        <li><b>Photos.</b> A profile picture you upload is checked by an AI model before anyone else sees it, and is refused if it is not suitable. A photo of an item that our checks judge unsuitable to show other people is never shown to them.</li>
        <li><b>Followers.</b> If you follow someone, or ask to follow them, they can see your handle and picture. People who can see their collection can see your handle in their list of followers.</li>
        <li><b>Rare finds.</b> If you choose to share them, the name of a rare item you scan and your handle can appear on other people's home screens.</li>
        <li><b>Replies and likes.</b> Replies you write on an item are shown with your handle to anyone who can see that item. A like adds to an item's count.</li>
        <li><b>Reports and blocks.</b> If you report something we keep the report, including the comment as it read at the time, so that we can act on it. The people you block are not told.</li>
      </ul>
      <p>You can make your profile private again at any time, with one switch in Settings. People who already follow you keep seeing your collection until you remove them from your followers, which you can do at any time in the app. To stop being found at all, remove your handle. You can delete your own replies at any time.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To identify your item and estimate what it is worth.</li>
        <li>To keep your scan history and your collection.</li>
        <li>To check your subscription and apply the daily scan limit.</li>
        <li>To find and fix problems, and to prevent misuse of the service.</li>
      </ul>
      <p>We do not sell your information, and we do not use it for advertising.</p>

      <h2>Who helps us provide the service</h2>
      <p>We use a small number of companies to run Keepworth. They process your information only to provide their part of the service.</p>
      <ul>
        <li><b>Anthropic</b> provides the AI model that looks at your photos to identify the item and to check that photos are suitable. Your photos, a profile picture you upload, and any answers you give to the scanner's questions are sent to it for those purposes.</li>
        <li><b>Supabase</b> hosts our database and file storage, where your account, scans and photos are kept.</li>
        <li><b>RevenueCat</b>, together with <b>Apple</b> and <b>Google</b>, handles subscriptions and tells us whether yours is active.</li>
        <li><b>Apple</b> and <b>Google</b>, if you choose to sign in with one of them, confirm to us that it is you.</li>
        <li><b>Resend</b> delivers the emails that carry a code, when you sign in with an email address or choose a new password. It is given your email address for that.</li>
        <li><b>Expo</b> delivers updates to the app.</li>
      </ul>
      <p>These companies may process information in Canada, the United States and other countries where they operate. We may also disclose information if the law requires it.</p>

      <h2>How long we keep it</h2>
      <p>We keep your photos, scans and collection for as long as you use Keepworth, so that your history and collection are there when you come back. When you delete your account in the app, or ask us to delete your data, your account and everything linked to it is deleted. The one thing kept is the number of free scans used on your phone, against the phone's random ID and nothing else, so that free scans cannot be had twice. Technical records are kept only for a limited time.</p>

      <h2>Your choices</h2>
      <ul>
        <li><b>Delete your account and data.</b> In the app, open Settings and choose Delete account and data. Your account and everything linked to it, your photos included, is deleted at once and cannot be brought back. You can also email ${mail} and ask. If you write from the app (Settings, then Contact support), the message includes your account ID so we can find your data.</li>
        <li><b>Photos and the AI model.</b> Before your first scan the app asks whether your photos may be sent to the AI model. Nothing is sent until you agree, and you can take your agreement back at any time with the switch in Settings. The app cannot scan without it.</li>
        <li><b>See or correct your data.</b> Email us and we will tell you what we hold.</li>
        <li><b>Camera and photos.</b> You can turn off the app's access in your phone's settings at any time. The app cannot scan without a photo.</li>
        <li><b>Subscriptions.</b> You can manage or cancel a subscription in your App Store or Google Play account.</li>
      </ul>
      <p>Depending on where you live, the law may give you further rights over your information, including the right to complain to your local data protection authority. We will honour those rights wherever they apply.</p>

      <h2>Children</h2>
      <p>Keepworth is for people aged 13 and over. It is not directed to children under 13, and we do not knowingly collect information from them. If you believe a child has used the app, email us and we will delete the data.</p>

      <h2>Changes to this policy</h2>
      <p>If we change this policy we will update the date at the top of this page. If the change is significant, we will also say so in the app.</p>

      <h2>Contact</h2>
      <p>Questions about privacy: ${mail}.</p>`;

export default {
  path: '/privacy/',
  title: 'Privacy policy',
  description: 'What Keepworth collects, how it is used, who helps provide the service, and how to have your data deleted.',
  body: article({ title: 'Privacy policy', note: `Last updated ${SITE.legalUpdated}`, html }),
};
