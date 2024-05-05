import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../Store/movieSlice";
import { NOW_PLAYING_MOVIE_LIST_API, API_OPTIONS } from "../Utils/Constants";

/**
 * TODO: add the now playing movie list to movie slice
 */
const useNowPlayingMovieList = () => {
  const dispatchMovieAction = useDispatch();

  const fetchNowPlayingMovieList = async () => {
    const response = await fetch(NOW_PLAYING_MOVIE_LIST_API, API_OPTIONS);
    const data = await response.json();
    dispatchMovieAction(addMovie(data.results));
  };

  useEffect(() => {
    fetchNowPlayingMovieList();
  }, []);
};

export default useNowPlayingMovieList;
