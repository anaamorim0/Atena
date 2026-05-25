const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

console.log('KEY:', import.meta.env.VITE_TMDB_API_KEY);
export const getPopularMovies = async (page) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};