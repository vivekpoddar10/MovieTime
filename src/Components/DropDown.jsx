import React from "react";

import { FaArrowRightFromBracket, FaGear, FaUser } from "react-icons/fa6";

const DropDown = () => {
  return (
    <div className="absolute right-[1.5%] mt-[2%] bg-black bg-opacity-50 flex flex-col  w-[150px]">
      <div className="flex gap-2 w-full px-4 py-2  items-center hover:bg-gray-500 hover:bg-opacity-50">
        <FaUser />
        Profile
      </div>
      <div className="flex gap-2 w-full px-4 py-2  items-center hover:bg-gray-500 hover:bg-opacity-50">
        <FaGear />
        Setting
      </div>
      <div className="flex gap-2 w-full px-4 py-2  items-center hover:bg-gray-500 hover:bg-opacity-50">
        <FaArrowRightFromBracket />
        Logout
      </div>
    </div>
  );
};

export default DropDown;
