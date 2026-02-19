const collectionList = document.querySelector('#collection-list');
const errorEL = document.querySelector('#error');

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

export const renderError = (msg) => {
    errorEL.textContent = msg;
}