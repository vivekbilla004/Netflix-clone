import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
 


const useMovieTrailer=(movieId)=>{
    const dispatch =useDispatch();

    const getMovieVideo = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        console.log(json);

        const filterdata = json.results.filter((video)=> video.type === "Trailer")
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        console.log(trailer);

        dispatch(addMovieTrailer(trailer))
    
    }

    useEffect(()=>{
      getMovieVideo();
    },[])
}

export default useMovieTrailer;