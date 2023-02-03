import axios from 'axios'

// export const API_BASE_URL = "https://api.themoviedb.org/3";
// export const API_KEY_URL = "0df0bd9988c9e9f56e2bc6d6b20adce2";
export const API_BASE_IMAGE = "https://image.tmdb.org/t/p/original";


// cambiar a apiUsers
const api = axios.create({
    baseURL: 'https://movies-app-4872f-default-rtdb.firebaseio.com/'
})

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key :  "0df0bd9988c9e9f56e2bc6d6b20adce2"
    }
})


export { api, apiMovies }