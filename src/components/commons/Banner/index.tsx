import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { endpoints } from '../../../utils/axios';
import './styles.scss'


type Props = {
  id: number
  title: String
  poster_path: String
  overview: String
  backdrop_path: String

}
const Banner = () => {

  const [movies, setMovies] = useState<Props[]>([])

  useEffect(() => {
    endpoints.apiMovies.get('/movie/upcoming').then(response => setMovies(response.data.results))
  }, [])
  ///movie/top_rated
  ///movie/upcoming

  if (movies.length >= 20) {
    movies.splice(movies.length - 15, 19);
  }
  return (
    <>
      <Carousel fade>{movies.map(movie => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100 card-img-top"
            src={`${endpoints.BASE_IMAGE + movie.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}


      </Carousel>

      {/* // quedo muy bien!!!!

    <Carousel fade>{movies.map(movie => (
      <Carousel.Item key={movie.id}>
        <img
          className="d-block w-100"
          src={`${API_BASE_IMAGE + movie.backdrop_path}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
      
    
    </Carousel> */}

    </>

  );
}

export { Banner }