import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const movieTrailer = useSelector((store) => store.movie.movieTrailerId);

  return (
    <div className="w-full h-full ">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
