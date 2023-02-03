import { FC, useEffect, useState } from "react";
import { apiMovies, API_BASE_IMAGE } from "../../utils/axios";
type Props = {
    id:number,
    title: String
    poster_path: String
}
const Dashboard = () => {

    const [movies, setMovies] = useState<Props[]>([])

    useEffect(() => {
        apiMovies.get('/movie/popular').then(response => setMovies(response.data.results))
    },[])
    console.log(movies)
    return (
        <> 
   
        <div>Dashboard</div>
        <div >
            {
            movies.map(movie => (<div><div key={movie.id}>{movie.title}</div>
            <img src={`${API_BASE_IMAGE + movie.poster_path}`} ></img>
            </div>
            ))
            
            }
        
        </div>
        </>
    );
}

export { Dashboard };