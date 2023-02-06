import axios from 'axios'

// export const API_BASE_URL = "https://api.themoviedb.org/3";
// export const API_KEY_URL = "0df0bd9988c9e9f56e2bc6d6b20adce2";
export const API_BASE_IMAGE = "https://image.tmdb.org/t/p/original";
export const IMAGE = "https://image.tmdb.org/t/p/w500"


// cambiar a apiUsers
const api = axios.create({
    baseURL: 'https://movies-app-4872f-default-rtdb.firebaseio.com/'
})



const BASE_IMAGE = "https://image.tmdb.org/t/p/original";
const MOVIE_POPULAR = "/movie/popular";
const MOVIE_TOP_RATED = "/movie/top_rated";
const SEARCH_MOVIE = "/search/movie"; 
const MOVIE_UPCOMING = "/movie/upcoming"; 
const MOVIE_LATEST = "/movie/latest"; 

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key :  "0df0bd9988c9e9f56e2bc6d6b20adce2"
    }
})


export const endpoints = { apiMovies, BASE_IMAGE, MOVIE_POPULAR, MOVIE_TOP_RATED, SEARCH_MOVIE, MOVIE_UPCOMING, MOVIE_LATEST }

export { api }