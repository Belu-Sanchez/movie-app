import { FC, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Banner } from "../../components/commons";
// import { ScrollDos } from "../../components/commons/Scroll copy";
import { endpoints } from "../../utils/axios";
import './styles.scss';



type Props = {
    id: number
    title: String
    poster_path: String
    overview: String
    backdrop_path: String

}
const Dashboard = () => {

    const [movies, setMovies] = useState<Props[]>([])

    const [movieId, setMovieId] = useState(Number)
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        endpoints.apiMovies.get(endpoints.MOVIE_TOP_RATED).then(response => setMovies(response.data.results))
    }, [])

    const handel = () => {
    }
    return (
        <>
            <Banner />
            {/* <Scroll /> */}
            {/* <ScrollDos title={"Top rated"} handleClick={() => console.log(movies)}>{movies.map(movie => (
                <img key={movie.id} className="col card-block"
                    src={`${endpoints.BASE_IMAGE + movie.poster_path}`}
                    alt="First slide"
                />
              
            ))} */}
            {/* </ScrollDos> */}
        </>
    );
}

export { Dashboard };