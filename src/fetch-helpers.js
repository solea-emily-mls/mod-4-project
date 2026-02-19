export const getData = async () => {
    try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
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

export const getArtById = async (id) => {
    try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        if (!response.ok) {
            throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }

        const { data: artwork } = await response.json();

        const artworkInfo = {
            title: artwork.title,
            image_id: artwork.image_id,
            date_display: artwork.date_display,
            place_of_origin: artwork.place_of_origin,
            short_description: artwork.short_description
        };

        return artworkInfo;

    } catch (error) {
        console.warn('Error fetching artwork: ', error);
    }
};

