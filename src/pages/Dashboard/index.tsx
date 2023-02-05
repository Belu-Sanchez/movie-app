import { FC, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Banner } from "../../components/commons";
import { apiMovies, API_BASE_IMAGE } from "../../utils/axios";
import './styles.scss';
type Props = {
    id: number
    title: String
    poster_path: String
    overview: String
}
const Dashboard = () => {

    const [movies, setMovies] = useState<Props[]>([])

    useEffect(() => {
        apiMovies.get('/movie/popular').then(response => setMovies(response.data.results))
    }, [])

    const [moviesSearche, setMoviesSearch] = useState<Props[]>([])

    useEffect(() => {
        apiMovies.get('/search/movie').then(response => setMoviesSearch(response.data.results))
    }, [])
    console.log(moviesSearche)
    // https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1









    return (
        <>
            <Banner />

            <div>Dashboard</div>

            {/* <Card style={{ width: '10rem' }} >
                {
                    movies.map(movie => (<div><div key={movie.id}>{movie.title}</div>
                        <img src={`${API_BASE_IMAGE + movie.poster_path}`} ></img>
                    </div>
                    ))

                }

            </Card> */}

         

        </>
    );
}

export { Dashboard };