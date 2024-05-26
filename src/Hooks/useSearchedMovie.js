import { useEffect, useState } from "react";
import { API_OPTIONS, SEARCH_MOVIE_API } from "../Utils/Constants";
import { addSearchMovieList } from "../Store/searchMovie";
import { useDispatch, useSelector } from "react-redux";

const useSearchedMovie = () => {
  const addMovie = useDispatch();
  const searchMovie = useSelector((store) => store.search.searchMovie);

  const fetchMovieDetails = async () => {
    const response = await fetch(`${SEARCH_MOVIE_API}${searchMovie}`, API_OPTIONS);
    const data = await response.json();
    addMovie(addSearchMovieList(data.results.filter((item) => item.poster_path != null)));
    console.log(data);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [searchMovie]);
};

export default useSearchedMovie;
