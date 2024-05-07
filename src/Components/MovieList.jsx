import React from "react";
import MovieCard from "./MovieCard";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieList = ({ title, movies, id }) => {
  const slideLeft = () => {
    let slider = document.getElementById(id);
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById(id);
    slider.scrollLeft += 500;
  };
  if (movies == null) return;
  return (
    <div className=" text-white p-4 pl-12 bg-gradient-to-t from-black">
      <h1 className="text-2xl pb-2">{title}</h1>
      <div className="flex">
        <div className="flex h-max-full items-center -mr-10 relative z-10 bg-white bg-opacity-20">
          <MdChevronLeft
            size={40}
            onClick={slideLeft}
            className=" cursor-pointer text-white "
          />
        </div>

        <div
          id={id}
          className="flex gap-2 overflow-x-scroll no-scrollbar scroll whitespace-nowrap scroll-smooth"
        >
          {movies.map(
            (movie) => ((key = movie.id), (<MovieCard info={movie} />))
          )}
        </div>
        <div className="flex  h-max-full items-center -ml-10 relative z-10 bg-white bg-opacity-20">
          <MdChevronRight
            size={40}
            onClick={slideRight}
            className=" cursor-pointer text-white  "
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
