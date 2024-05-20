import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import language from "../Utils/language";

const SecondaryContainer = () => {
  const store = useSelector((store) => store);

  return (
    <div className="bg-black">
      <div className="-mt-80 relative z-20">
        <MovieList
          title={language[store.language.lang].now}
          movies={store.movie.nowPlayingMovieList}
          id={"now-playing"}
        />
        <MovieList
          title={language[store.language.lang].top}
          movies={store.movie.topRateMovieList}
          id={"top-rated"}
        />
        <MovieList
          title={language[store.language.lang].popular}
          movies={store.movie.popularMovieList}
          id={"popular"}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
