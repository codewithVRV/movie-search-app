import "./MovieCard.css"

import { useNavigate } from "react-router-dom";

import ReactSVG from "../../assets/react.png"

import {LazyLoadImage} from "react-lazy-load-image-component"

function MovieCard ({Poster, Title, id}) {

    const navigator = useNavigate()

    function handleClickCard(){
        navigator(`/movie/${id}`)
    }

    return (
       <div className="all-movie-wrapper">
            <div className='movie-card-wrapper' onClick={() => handleClickCard()}>
                <div className="movie-image">
                    <LazyLoadImage  src={Poster}
                                    key={Poster}
                                    placeholderSrc={ReactSVG}
                                    alt="Image"
                                    />
                </div>
                
            </div>
            <div className="movie-title">
                <p>{Title}</p><br/>
            </div>
       </div>
    )
}

export default MovieCard;


