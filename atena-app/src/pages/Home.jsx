import { useState, useEffect } from 'react';
import MediaSection from '../components/MediaSection';

function Home() {
    const tabs = ['Movies', 'Series', 'Books'];
    const [activeTab, setActiveTab] = useState('Movies');

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const [topFavs, setTopFavs] = useState([]);
    const [topSuggested, setTopSuggested] = useState([]);

    useEffect(() => {
        async function buscarFilmes() {
            const responsePopular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`);
            const dataPopular = await responsePopular.json();
            setTopFavs(dataPopular.results);
            const responseSuggested = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`);
            const dataSuggested = await responseSuggested.json();
            setTopSuggested(dataSuggested.results);
        }
        buscarFilmes();
    }, [activeTab]);

    // Transformar filmes para o formato necessário para o Carousel3D
    const favoriteMovies = topFavs.map(filme => ({
        title: filme.title,
        poster: `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    }))

    const suggestedMovies = topSuggested.map(filme => ({
        title: filme.title,
        poster: `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    }))

    return (
        <div className="home">
            <main className="content">
                <div className="filter-container">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? 'filter-btn active' : 'filter-btn'}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <MediaSection title="Your Favorite Movies" items={favoriteMovies} />

                <MediaSection title="Suggested for You" items={suggestedMovies} />
            </main>
        </div>
    )
}

export default Home
