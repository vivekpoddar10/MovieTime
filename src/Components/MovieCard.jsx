import React from "react";
import { IMAGE_URL } from "../Utils/Constants";

const MovieCard = ({ info }) => {

  return (
    <div>
      <div className="w-40 ">
        <img src={IMAGE_URL + info.poster_path} alt="" />
      </div>
    </div>
  );
};

export default MovieCard;
