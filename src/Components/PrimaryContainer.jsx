import React from "react";
import { useSelector } from "react-redux";

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PrimaryContainer = () => {
  const movieList = useSelector((store) => store.movie.nowPlayingMovieList);
  if (!movieList) return;
  const movie = movieList[0];


  return (
    <div>
      <VideoTitle {...movie} />
      <VideoBackground {...movie} />
    </div>
  );
};

export default PrimaryContainer;
