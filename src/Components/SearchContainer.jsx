import React from "react";
import useSearchedMovie from "../Hooks/useSearchedMovie";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SearchContainer = () => {
  useSearchedMovie();
  const movieList = useSelector((store) => store.search.searchMovieList);
  return (
    <div className="flex flex-wrap  gap-2 px-16 py-4  bg-black bg-opacity-50">
      {movieList?.map((movie, index) => (
        <MovieCard key={movie.id} info={movie} />
      ))}
    </div>
  );
};

export default SearchContainer;
