import { getData } from './fetch-collection.js';
import { getArtById } from './fetch-collection.js';

const getArtworks = async () => {
      const artworks = await getData();
      console.log(artworks);
}

const getArt = async (id) => {
  const artworkInfo = await getArtById(`${id}`);
  console.log(artworkInfo);
}

// getArt("129884")
// getArtworks()