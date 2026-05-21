import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPopularMovies } from '../services/tmdb'; // Verifica se o ficheiro é tmdb ou tmbd
import MediaSection from '../components/MediaSection';

function MediaPage({ searchQuery }) {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Corrigido de loadin para loading
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getPopularMovies();
            console.log("Dados da API TMDB:", data); // ISTO MOSTRA TUDO NA CONSOLA
            setMovies(data || []); 
            setLoading(false);
        };
        fetchMovies();
    }, []);

    // FILTRAGEM SIMPLIFICADA PARA API:
    // Filtramos a lista simples de filmes que vem do TMDB
    const filteredMovies = movies.filter(movie => 
        movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <main className="content"><p>Loading movies from TMDB...</p></main>;
    
    return (
        <main className="content">
            <div className="media-container">
                <div className="filter-container">
                    {['Watched', 'Watching', 'To Watch'].map((label) => (
                        <button
                            key={label}
                            className={`filter-btn ${filter === label ? 'active' : ''}`}
                            onClick={() => setFilter(filter === label ? null : label)}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="media-lists-container">
                    <div className="filtered-view">
                        <div className="counter-card">
                            <span className="count-number">{filteredMovies.length}</span>
                            <span className="count-label">{filter || 'Popular Movies'}</span>
                        </div>

                        <div className="movies-grid">
                            {filteredMovies.map(movie => (
                                <div 
                                    key={movie.id} 
                                    className="movie-card-grid"
                                    /* 1. Adicionamos o evento de clique para navegar */
                                    /* Enviamos o objeto 'movie' inteiro no estado da rota */
                                    onClick={() => navigate(`/movie/${movie.id}`, { state: { movie } })}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                        alt={movie.title} 
                                    />
                                </div>
                            ))}
                        </div>

                        {filteredMovies.length === 0 && (
                            <p style={{ textAlign: 'center', marginTop: '20px' }}>
                                No results found for "{searchQuery}"
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MediaPage;