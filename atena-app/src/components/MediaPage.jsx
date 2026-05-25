import { useState, useEffect, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { getPopularMovies } from '../services/tmdb'; 

function MediaPage({ searchQuery }) {
    const [movies, setMovies] = useState([]);   // film list
    const [loading, setLoading] = useState(true);   // is it loading?
    const [filter, setFilter] = useState(null);   // active filter (Watched, To Watch, ...)
    const [page, setPage] = useState(1);   // current page (infinite scroll)
    const [fetchingMore, setFetchingMore] = useState(false);   // is it fetching more for infinite scroll?

    const navigate = useNavigate();
    const loaderRef = useRef(null);   // ref for infinite scroll trigger

    useEffect(() => {
        const fetchMovies = async () => {
            if (page === 1) setLoading(true);
            else setFetchingMore(true);

            const data = await getPopularMovies(page);
            setMovies((prevMovies) => [...prevMovies, ...(data.results || [])]);    // append new movies to existing list

            setLoading(false);
            setFetchingMore(false);
        };

        fetchMovies();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(      // detect when bottom is visible and activate infinite scroll
            (entries) => {
                if (entries[0].isIntersecting && !loading && !fetchingMore) {
                    setPage((prevPage) => prevPage + 1);   // load next page when bottom is visible
                }  
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        }
    }, [loading, fetchingMore]);

    const filteredMovies = movies.filter(movie => {
        if (!searchQuery) return true;   // if no search query, show all
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());   // filter by title
    });

    if (loading) return <main className="content"><p>Loading movies...</p></main>;


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
                            
                            <span className={filter? "count-label" : "popular-movies-label"}>
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

                        <div ref={loaderRef} className="end-loader">
                            {fetchingMore && <p>Loading more movies...</p>}
                        </div>

                        {filteredMovies.length === 0 && (
                            <p className="no-results">
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