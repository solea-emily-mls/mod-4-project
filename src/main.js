import { getData } from './fetch-collection.js';

const getArtworks = async () => {
      const artworks = await getData();
      console.log(artworks);
}

getArtworks()