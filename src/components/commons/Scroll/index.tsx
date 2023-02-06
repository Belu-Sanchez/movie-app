import { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { endpoints } from "../../../utils/axios";
import './styles.scss';

type Props = {
    id: number
    title: String
    poster_path: String
    overview: String
    backdrop_path: String

}
const Scroll = () => {

    const [movies, setMovies] = useState<Props[]>([])
    const navigate = useNavigate();


    useEffect(() => {
        endpoints.apiMovies.get(endpoints.MOVIE_POPULAR).then(response => setMovies(response.data.results))
    }, [])

    return (
        <>
            <div className="scroll">
                <h6 className="title">Polular movies</h6>
                <div className="row pb-4">{movies.map(movie => (
                    <img className="col card-block"
                        src={`${endpoints.BASE_IMAGE + movie.poster_path}`}
                        alt="First slide"
                    />
                ))}
                </div>
            </div>
        </>
    );
}

