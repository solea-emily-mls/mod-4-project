export const getData = async () => {
    try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=100&fields=id,title,image_id,artwork_type_title');
        if (!response.ok) {
            throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }
        const { data: artworksArray } = await response.json();
        console.log(artworksArray);

        const artworks = artworksArray.map(artwork => ({
            id: artwork.id,
            title: artwork.title,
            artwork_type: artwork.artwork_type_title,
            image_id: artwork.image_id
        }));

        return artworks;
    }
    catch (error) {
        console.warn('Error fetching artworks: ', error);
    }
} 
