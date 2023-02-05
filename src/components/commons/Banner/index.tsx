import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { apiMovies, API_BASE_IMAGE } from '../../../utils/axios';
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
    apiMovies.get('/movie/upcoming').then(response => setMovies(response.data.results))
  }, [])
  ///movie/top_rated
  ///movie/upcoming

  console.log(movies)
  if (movies.length >= 20) {
    movies.splice(movies.length - 17, 19);
  }
  return (
    <>
   

      {/* <div className="container">
        <div className="slider">

          <div className="box1 box">
            <div className="bg"></div>
            <div className="details">{movies.map(movie => (
              <div key={movie.id}>
                <h1 key={movie.id}>{movie.title}</h1>
                <p>{movie.overview}</p>

                <button>Check Now</button>
                <div className="illustration">
                  <div className="inner">
                  <img
          className="d-block w-100 illustration "
          src={`${API_BASE_IMAGE + movie.poster_path}`}
          alt="First slide"
        />
                  </div>
                </div>
              </div>

            ))}



            </div>


          </div>


        </div>
      </div> */}


<Carousel fade>{movies.map(movie => (
      <Carousel.Item key={movie.id}>
        <img
          className="d-block w-100 card-img-top "
          src={`${API_BASE_IMAGE + movie.backdrop_path}`}
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