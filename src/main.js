import { getData, getArtById } from './fetch-helpers.js';
import { renderCollection, renderError, renderArtwork } from './dom-helpers.js';

const getArtworks = async () => {
      const artworks = await getData();
      console.log(artworks);
      if (artworks.error)  {
        renderError(artworks.error.message);
        renderCollection();
      }  else {
      renderError('NOT HERE');
      renderCollection(artworks);
      }
}

const getArt = async (id) => {
  const artworkInfo = await getArtById(`${id}`);
  console.log(artworkInfo);

  if (artworkInfo.error)  {
        console.log(renderError(artworkInfo.error));
        renderCollection();
      }  else {
      renderError('NOT HERE');
      renderArtwork(artworkInfo);
      }
}

getArt(129884);
getArtworks();
