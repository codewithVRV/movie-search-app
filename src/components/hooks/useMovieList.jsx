import { useState, useEffect } from "react";
import { SearchMovie } from "../../OmdbApi/omdbApi";
import axios from "axios";



function useMovieList (...args) {
    const [movieList, setMovieList] = useState([])

    async function downloadDefaultMovies (...args) {
        try{
            const urls = args.map((url) => SearchMovie(url));
            const response = await axios.all(urls.map(url => axios.get(url)))
            if(response[0].data.Error) {
                setMovieList([])
            }
            else{
                const movies = response.map((movieResponse) => movieResponse.data.Search);
                setMovieList([].concat(...movies))
            }
            
        }
        catch (error) {
            console.log("Api, Request Failed")
        }

       
    }
    

    useEffect(() => {
        downloadDefaultMovies(...args)

    }, [...args])



    return {movieList}
}

export default useMovieList;