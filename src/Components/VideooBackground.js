
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideooBackground = ({movieId})=>{
    const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)
    
    useMovieTrailer(movieId);

    return(
        <div>
       <iframe className="w-screen h-screen"
       width="560" height="315" 
       src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
       title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideooBackground;