import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className=" w-full pl-10 flex flex-col  absolute pt-[20%] ">
      <h1 className="text-4xl font-bold text-white">{original_title}</h1>
      <p className="py-4 text-md w-1/3 text-white">{overview}</p>
      <div className="flex">
        <button className="flex   px-4 py-2  bg-white text-black hover:opacity-70 ">
          <div className=" h-full flex items-center justify-center mx-1">
            <FaPlay />
          </div>
          <div className=" h-full flex items-center justify-center mx-1">
            Play
          </div>
        </button>
        <button className="flex  mx-4 px-4 py-2 bg-gray-400 text-white">
          <div className=" h-full flex items-center justify-center mx-1">
            <FaCircleInfo />
          </div>
          <div className=" h-full flex items-center justify-center mx-1">
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
