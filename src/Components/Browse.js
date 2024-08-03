
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from "./MainContainer"
import SecondaryConatiner from './SecondaryConatiner';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useLatestMovies from '../hooks/useLatestMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useLatestMovies();

  return (
    <div>
      <Header/>
      {showGptSearch ? 
      (<GptSearch/> ) :
      (<><MainContainer/>
      <SecondaryConatiner/> </>)}
            {/* MainContainer
           - VideoBackground
           - VideoTitle
          SecondaryContainer
           - MovieList*n
            - cards*n
              */}
      {/* <MainContainer/>        */}
    </div>
  )
}

export default Browse;
