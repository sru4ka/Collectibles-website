// Shown for any address that does not exist.
const body = `    <section class="center">
      <img src="/assets/mark.svg" alt="" width="96" height="96">
      <h1 style="margin-top: 24px; font-size: 40px;">Nothing here</h1>
      <p style="margin-top: 12px; color: var(--ink-soft);">That page does not exist. <a href="/">Go to the home page</a>.</p>
    </section>`;

export default {
  path: '/404.html',
  title: 'Page not found',
  description: 'That page does not exist.',
  body,
};
