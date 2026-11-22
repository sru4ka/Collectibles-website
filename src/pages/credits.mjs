// Credits for the photographs shown on this site. The licences that ask for
// attribution are met by this page, so add a line here for every photo added.
import { article } from '../layout.mjs';

const COMMONS = 'https://commons.wikimedia.org/wiki/File:';
const PHOTOS = [
  {
    title: '1955 doubled die Lincoln cent',
    author: 'Lost Dutchman Rare Coins',
    licence: 'CC BY-SA 3.0 US',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/us/',
    source: `${COMMONS}1955_doubled_die_Lincoln_cent.jpg`,
  },
  {
    title: '1909-S VDB Lincoln cent',
    author: 'Lost Dutchman Rare Coins',
    licence: 'CC BY-SA 3.0 US',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/us/',
    source: `${COMMONS}1909-S_VDB_Lincoln_cent_obverse.jpg`,
  },
  {
    title: '1955 Canada silver 10 cents',
    author: 'Mister rf',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    source: `${COMMONS}Canada_$0.1_1955.jpg`,
  },
  {
    title: 'Griswold skillet, underside',
    author: 'Modemac',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    source: `${COMMONS}Griswold-Slant-Logo.jpg`,
  },
];

const html = `
      <p>The photographs on this site come from photographers who share their work freely. Each was cropped and resized.</p>
      <ul>
${PHOTOS.map(
  (photo) =>
    `        <li><a href="${photo.source}" rel="noopener">${photo.title}</a>, by ${photo.author}, <a href="${photo.licenceUrl}" rel="noopener">${photo.licence}</a>.</li>`,
).join('\n')}
      </ul>
      <p>The drawings and the screens of the app are Keepworth's own. The app lists the credits for its own photographs under Settings, then Photo credits.</p>`;

export default {
  path: '/credits/',
  title: 'Photo credits',
  description: 'Who made the photographs shown on the Keepworth website, and under what licence.',
  body: article({ title: 'Photo credits', html }),
};
