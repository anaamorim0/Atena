import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const loaderRef = useRef(null);
    const navigate = useNavigate();

    // 1. Infinite Scroll Fetching Logic
    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=f8203e9a13c859ae211a955c17fe8296&page=${page}`
                );
                const data = await response.json();
                // Append next batch of movies to our array
                setMovies((prevMovies) => [...prevMovies, ...data.results]);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
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
    }, [loading]);

    const handleMovieClick = (movie) => {
        navigate(`/movie/${movie.id}`, { state: { movie } });
    };

    return (
        <div className="movie-container">
            
            <div className="tabs-container"> 
                <button className="tab-btn">Watched</button>
                <button className="tab-btn">Watching</button>
                <button className="tab-btn">To Watch</button>
            </div>

            <div className="stats-card">
                {/* Swapping the static '20' for the dynamic length */}
                <h1>{movies.length}</h1> 
                <p>Popular Movies</p>
            </div>

            <div className="movie-grid">
                {movies.map((movie, index) => (
                    <div 
                        key={`${movie.id}-${index}`} 
                        className="movie-card" 
                        onClick={() => handleMovieClick(movie)} 
                    >
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                        />
                    </div>
                ))}
            </div>

            <div ref={loaderRef} style={{ height: "40px", margin: "20px 0", textAlign: "center" }}>
                {loading && <p>Loading more content...</p>}
            </div>
        </div>
    );
}

export default MovieList;