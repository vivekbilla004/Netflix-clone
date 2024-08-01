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
        addPopularMovies: (state,action) =>{
        state.popularMovies = action.payload
        },
        addTopRatedMovies: (state,action) =>{
        state.TopRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) =>{
        state.upcomingMovies = action.payload
        },
        addLatestMovies: (state,action) =>{
        state.LatestMovies = action.payload
        },
        addMovieTrailer: (state,action) =>{
         state.trailerVideo  = action.payload 
        }
    }
}
)

export const{addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addLatestMovies} = movieSlice.actions;
export default movieSlice.reducer;