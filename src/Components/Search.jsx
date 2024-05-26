import React from "react";
import SearchBar from "./SearchBar";
import { BG_URL } from "../Utils/Constants";
import { useSelector } from "react-redux";
import SearchContainer from "./SearchContainer";

const Search = () => {
  const searchMovie = useSelector((store) => store.search.searchMovie);
  return (
    <div className="">
      <div className="absolute -z-10 w-max-full overflow-hidden">
        <img src={BG_URL} alt="" className="w-screen h-screen" />
      </div>
      <SearchBar />
      {searchMovie != null && <SearchContainer />}
    </div>
  );
};

export default Search;
