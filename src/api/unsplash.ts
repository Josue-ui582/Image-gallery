

const UNSPLASH_ACCESS_KEY = 'KXCXYiKyvwastoNPqbkCqnlQ2wrwsNwPgTpLhPpf8GY'

const fetchImages  = async (query = '', page = 1, perPage = 6) => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${query}`;
    const headers = {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    };

    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('Erreur lors de la récupération des images');
    const data = await response.json();
    return data;
}

export default fetchImages;
