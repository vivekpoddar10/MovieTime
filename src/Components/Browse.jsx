import Header from "./Header";
import { useSelector } from "react-redux";


import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

import useNowPlayingMovieList from "../hooks/useNowPlayingMovieList";
import usePopularMovieList from '../Hooks/usePopularMovieList';
import useTopRatedMovieList from "../Hooks/useTopRatedMovieList";

const Browse = () => {
  useNowPlayingMovieList();
  usePopularMovieList();
  useTopRatedMovieList();
  

  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
