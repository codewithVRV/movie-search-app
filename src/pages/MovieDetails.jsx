import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { SearchMovieById } from "../apis/omdb";
import MovieCard from "../components/MovieCard/MovieCard";
import { SearchMovieById } from "../OmdbApi/omdbApi";

    
import './MovieDetails.css'

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


function MovieDetails () {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    


    async function downloadMovie(){
        const response = await axios.get(SearchMovieById(id));
        setMovie(response.data);
    }

    useEffect(() => {
        downloadMovie();
        // throw "error"
        if(Math.random() > 0.5) {
            throw "error"
        }

    }, [id]);
    return (
        <div className="movie-details-wrapper">  
                {movie && <MovieCard 
                            Title={movie.Title}
                            Year={movie.Year}
                            Type={movie.Type}
                            Poster={movie.Poster}
                            id={movie.imdbID}
                            
                        />}
            {movie && <div className="movie-details">
                    <div>
                        <b>Plot:</b> {movie.Plot}
                    </div>
                    <div>
                        <b>Actors:</b> {movie.Actors}
                    </div>
                    <div>
                        <b>Genre: </b> {movie.Genre.split(",").map((genre) => {
                            return <span className="genre" key={genre}>{genre}</span>
                        })}
                    </div>
                    <div>
                        <Rating items={10} value={Math.floor(movie.imdbRating)}/>
                    </div>
            </div>}
            
           
        </div>
    )
}
export default MovieDetails;