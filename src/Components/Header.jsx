import React from "react";

import { LOGO } from "../Utils/Constants";

const Header = () => {
  return (
    <div className="absolute z-10 bg-gradient-to-b	from-black">
      <img src={LOGO} className="w-40 " />
    </div>
  );
};

export default Header;
