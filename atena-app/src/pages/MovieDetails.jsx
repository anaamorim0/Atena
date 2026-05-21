import { useLocation, useNavigate } from 'react-router-dom';
import arrowIcon from '../assets/icons/arrow-icon.png';

function MovieDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state?.movie; 

    if (!movie) return <p>Filme não encontrado.</p>;

    return (
        <div className="movie-details-page">
            <div className="details-header">
                {/*
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <img src={arrowIcon} alt="Back" className="arrow-icon" style={{ transform: 'rotate(180deg)' }} />
                </button>
                */}

                <div className="backdrop-background">
                    <img 
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                        className="backdrop-blur" 
                        alt="" 
                    />
                    <div className="backdrop-overlay"></div>
                </div>

                <div className="main-info-row">
                    <div className="poster-column">
                        <div className="poster-mini">
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                            />
                        </div>
                    </div>

                    <div className="title-block">
                        <h1>{movie.title}</h1>
                        <span className="year-label">{movie.release_date?.split('-')[0]}</span>
                    </div>
                </div>
            </div>

            <div className="details-content">
                <div className="synopsis">
                    <h3>Sinopse</h3>
                    <p>{movie.overview || "Sem sinopse disponível."}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;