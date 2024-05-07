import { useDispatch } from "react-redux";
import { addPopularMovie } from "../Store/movieSlice";
import { API_OPTIONS, POPULAR_MOVIE_LIST_API } from "../Utils/Constants";
import { useEffect } from "react";

const usePopularMovieList = () => {
  const dispatchMovieAction = useDispatch();
  const fetchPopularMovieList = async () => {
    const response = await fetch(POPULAR_MOVIE_LIST_API, API_OPTIONS);
    const data = await response.json();
    dispatchMovieAction(addPopularMovie(data.results));
  };
  useEffect(() => {
    fetchPopularMovieList();
  }, []);
};
export default usePopularMovieList;
