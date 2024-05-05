import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";

import { addMovieTrailerId } from "../Store/movieSlice";

// TODO: fetch the movie trailer id by the given movie id
const useMovieTrailer = (id) => {
  const dispatchTrailerId = useDispatch();

  const getMovieVideo = async () => {
    // TODO: fetch all the video associated with the movie id
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    // TODO: filter the trailer video
    const trailer = data.results.filter(
      (item) => item.type == "Trailer" && item.name == "Official Trailer"
    );
    // TODO: add the trailer video key to the store
    dispatchTrailerId(addMovieTrailerId(trailer[0].key));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
