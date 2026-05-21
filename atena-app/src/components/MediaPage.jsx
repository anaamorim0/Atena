import { useState, useEffect, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { getPopularMovies } from '../services/tmdb'; 

function MediaPage({ searchQuery }) {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 
    const [filter, setFilter] = useState(null);
    
    const [page, setPage] = useState(1);
    const [fetchingMore, setFetchingMore] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        const fetchMovies = async () => {
            if (page === 1) setLoading(true);
            else setFetchingMore(true);

            const data = await getPopularMovies(page); 
            
            setMovies((prevMovies) => [...prevMovies, ...(data || [])]); 
            
            setLoading(false);
            setFetchingMore(false);
        };
        fetchMovies();
    }, [page]); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && !fetchingMore) {
                    setPage((prevPage) => prevPage + 1); 
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [loading, fetchingMore]);

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
                        <div className={filter ? "counter-card" : ""}>
                            {filter && <span className="count-number">{filteredMovies.length}</span>}
                            
                            <span 
                                className={filter ? "count-label" : ""}
                                style={!filter ? { 
                                    fontSize: '1rem', 
                                    fontWeight: 'bold', 
                                    color: '#8E8E93', 
                                    display: 'block',
                                    marginBottom: '20px'
                                } : {}}
                            >
                                {filter || 'Popular Movies'}
                            </span>
                        </div>

                        <div className="movies-grid">
                            {filteredMovies.map((movie, index) => (
                                <div 
                                    key={`${movie.id}-${index}`} 
                                    className="movie-card-grid"
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

                        <div ref={loaderRef} style={{ height: "40px", margin: "20px 0", textAlign: "center" }}>
                            {fetchingMore && <p style={{ color: '#aaa' }}>Loading more movies...</p>}
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