import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addLatestMovies} from "../Utils/movieSlice"
import { API_OPTIONS } from "../Utils/constants";

const useLatestMovies = () =>{
    const dispatch = useDispatch();
    const getLatestMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/latest', API_OPTIONS)
      const json = await data.json();
      console.log(json.results);
      dispatch(addLatestMovies(json.results))
    }
     useEffect(()=>{
      getLatestMovies();
     },[])
}

export default useLatestMovies;
