import { getData, getArtById } from "./fetch-helpers.js";
import { renderCollection, renderError, renderArtwork } from "./dom-helpers.js";

const getArtworks = async (keyword, results) => {
  const artworks = await getData(keyword, results);
  console.log(artworks);
  if (artworks.error) {
    renderError(artworks.error.message);
    renderCollection();
  } else {
    renderError("NOT HERE");
    renderCollection(artworks);
  }
};

const getArt = async (id) => {
  const artworkInfo = await getArtById(`${id}`);
  console.log(artworkInfo);
  if (artworkInfo.error) {
    console.log(renderError(artworkInfo.error));
    renderCollection();
  } else {
    renderError("NOT HERE");
    renderArtwork(artworkInfo);
  }
};

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const keyword = document.querySelector('#keyword').value;
  const selected = document.querySelector('[name="results"]:checked');
  const results = selected ? selected.value : undefined;
  console.log({ keyword, results });
  form.reset();
  getArtworks(keyword, results);
});
