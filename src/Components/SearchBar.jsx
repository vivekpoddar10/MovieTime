import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="pt-[5%]">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 mx-auto flex gap-2 items-center bg-black bg-opacity-50 p-4"
      >
        <input
          type="text"
          placeholder="Which movie you would like to watch"
          className="w-4/5 rounded-lg p-2 outline-none "
        />
        <button className="text-white text-2xl ">
          <FaMagnifyingGlass />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
