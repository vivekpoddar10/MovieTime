import React, { useRef } from "react";
import language from "../Utils/language";
import { useDispatch, useSelector } from "react-redux";

import { addSearchMovieText } from "../Store/searchMovie";

const SearchBar = () => {
  const langSlice = useSelector((store) => store.language.lang);
  const searchedMovie = useRef(null);
  const dispatchSearchMovie = useDispatch();

  return (
    <div className="pt-[5%]">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 mx-auto flex gap-2 items-center bg-black bg-opacity-50 p-4"
      >
        <input
          type="text"
          placeholder={language[langSlice].placeholder}
          ref={searchedMovie}
          className="w-4/5 rounded-lg p-2 outline-none "
        />
        <button
          className="text-white px-4 py-2 bg-red-600 w-1/5 rounded-lg"
          onClick={() => {
            console.log(searchedMovie.current.value);
            dispatchSearchMovie(addSearchMovieText(searchedMovie.current.value));
          }}
        >
          {language[langSlice].button}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
