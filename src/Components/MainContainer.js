
import VideooTitle from "./VideooTitle";
import VideooBackground from "./VideooBackground";
import { useSelector } from "react-redux";

const MainContainer = ()=>{
    
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(!movies) return

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title, overview,id} = mainMovie



    return(
        <div>
           
            <VideooTitle title={original_title} overview={overview} />
            <VideooBackground movieId={id}/>
        </div>
    )
}
 export default MainContainer;