import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice( {
    name: "movies" ,
    initialState: {
        nowPlayingMovies : null,
        trailerVideo: null
    },
    reducers : {
        addNowPlayingMovies: (state,action) =>{
        state.nowPlayingMovies = action.payload
        },
        addMovieTrailer: (state,action) =>{
         state.trailerVideo  = action.payload 
        }
    }
}
)

export const{addNowPlayingMovies,addMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer;