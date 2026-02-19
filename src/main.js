import { getData } from './fetch-helpers.js';
import { renderCollection, renderError } from './dom-helpers.js';

const getArtworks = async () => {
      const artworks = await getData();
      console.log(artworks);
      if (artworks.error)  {
        renderError(artworks.error.message);
        renderCollection([]);
      }  else {
      renderError('');
      renderCollection(artworks);
      }
}

getArtworks();
