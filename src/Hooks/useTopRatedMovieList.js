import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIE_LIST_API } from "../Utils/Constants";
import { addTopRatedMovie } from "../Store/movieSlice";

const useTopRatedMovieList = () => {
  const dispatchMovieAction = useDispatch();

  const fetchTopRatedMovie = async () => {
    const response = await fetch(TOP_RATED_MOVIE_LIST_API, API_OPTIONS);
    const data = await response.json();
    dispatchMovieAction(addTopRatedMovie(data.results));
  };

  useEffect(() => {
    fetchTopRatedMovie();
  }, []);
};

export default useTopRatedMovieList;
