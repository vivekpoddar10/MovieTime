import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  console.log(movies);

  return (
    <div className="bg-black">
      <div className="-mt-80 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovieList}
          id={"now-playing"}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRateMovieList}
          id={"top-rated"}
        />
        <MovieList
          title={"Popular Movies"}
          movies={movies.popularMovieList}
          id={"popular"}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
