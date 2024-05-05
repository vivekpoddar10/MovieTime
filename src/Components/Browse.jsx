import Header from "./Header";
import { useSelector } from "react-redux";

import useNowPlayingMovieList from "../hooks/useNowPlayingMovieList";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovieList();

  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
