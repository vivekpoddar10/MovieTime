import Header from "./Header";
import Search from "./Search";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

import useNowPlayingMovieList from "../hooks/useNowPlayingMovieList";
import usePopularMovieList from "../Hooks/usePopularMovieList";
import useTopRatedMovieList from "../Hooks/useTopRatedMovieList";

import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovieList();
  usePopularMovieList();
  useTopRatedMovieList();

  const selectVisibility = useSelector((store) => store.visible);
  console.log(selectVisibility);

  return (
    <div className=" p-0 m-0">
      <Header />
      {selectVisibility.searchComponent ? (
        <Search />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
