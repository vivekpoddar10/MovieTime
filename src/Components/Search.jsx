import React from "react";
import SearchBar from "./SearchBar";
import { BG_URL } from "../Utils/Constants";

const Search = () => {
  return (
    <div className="">
      <div className="absolute -z-10 w-max-full overflow-hidden">
        <img src={BG_URL} alt="" className="w-screen h-screen"/>
      </div>
      <SearchBar />
    </div>
  );
};

export default Search;
