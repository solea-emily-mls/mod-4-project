import { getData } from './fetch-helpers.js';

const getArtworks = async () => {
      const artworks = await getData();
      console.log(artworks);
}

getArtworks();
