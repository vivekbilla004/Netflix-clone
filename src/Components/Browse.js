
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from "./MainContainer"
import SecondaryConatiner from './SecondaryConatiner';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useLatestMovies from '../hooks/useLatestMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useLatestMovies();

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
      <SecondaryConatiner/>
    </div>
  )
}

export default Browse;
