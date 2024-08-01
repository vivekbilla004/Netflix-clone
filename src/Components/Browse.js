
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from "./MainContainer"

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      {/* MainContainer
           - VideoBackground
           - VideoTitle
          SecondaryContainer
           - MovieList*n
            - cards*n
              */}
      {/* <MainContainer/>        */}
      <MainContainer/>
    </div>
  )
}

export default Browse;
