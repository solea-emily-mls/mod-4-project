const collectionList = document.querySelector('#collection-list');
const errorEL = document.querySelector('#error');
const artwork = document.querySelector('#single-work')
const card = document.querySelector('#card');

export const renderCollection = (artworks) => {
    collectionList.innerHTML= '';

    artworks.forEach((work) => {
        const li = document.createElement('li');

        li.dataset.workId = work.id;

        const img = document.createElement('img');
        img.src = `https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`;
        img.alt = work.title;

        const h3 = document.createElement('h3');
        h3.textContent = work.title;

        li.append(img, h3);
        collectionList.append(li);
    });
};

export const renderArtwork = (work) => {
    artwork.innerHTML = '';

    const img = document.createElement('img');
    img.src = `https://www.artic.edu/iiif/2/${work.image_id}/full/1686,/0/default.jpg`;
    img.alt = work.title;

    const title = document.createElement('h3');
    title.textContent = work.title;

    const info = document.createElement('h4')
    info.textContent = `${work.place_of_origin || 'Unknown origin'},  ${work.date_display || 'Date unknown'}`;
    const description = document.createElement('p');
    description.textContent = `${work.short_description || 'No description available'}`;

    card.append(img, title, info, description);
    artwork.append(card);
};

export const renderError = (msg) => {
    errorEL.textContent = msg;
}