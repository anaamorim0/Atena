const API_KEY = import.meta.env.VITE_TMBD_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};