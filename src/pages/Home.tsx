// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import fetchImages from '../api/unsplash';
import ImageGrid from '../components/imageGrid/ImageGrid';
import SearchBar from '../components/searchBar/SearchBar';
import './Home.css'

const Home = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchImages(query, page).then((data) => setImages(data.results));
    }, [query, page]);

    return (
        <div>
            <div className='home'>
                <h1>Permettez vous une expériences convivial avec nos image de qualité professionnelle</h1>
            </div>
            <SearchBar onSearch={setQuery} />
            <ImageGrid images={images} />
        </div>
    );
};

export default Home;