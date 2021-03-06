import axios from "axios";

export const SearchTMDBMovies = async (query) => {
    let URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`;
try {
    let response = await axios.get(URL);
    let res = response.data;
    return {res,  success: true};
} catch (error) {
    return {
        error: true,
        message: error.message,
        success: false
    }
}
}

export const FetchMovie = async (movie_id) =>{
    let URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    try {
        let response = await axios.get(URL);
        let res = response.data;
        return {res,  success: true};
    } catch (error) {
        return {
            error: true,
            message: error.message,
            success: false
        }
    }
}

