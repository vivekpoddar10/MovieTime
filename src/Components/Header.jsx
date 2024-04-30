import React from "react";

import { LOGO } from "../Utils/Constants";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeDetail } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatchUser = useDispatch();
  const navigate = useNavigate();
  const subscribeUser = useSelector((store) => store.user.details);

  return (
    <div className="absolute w-screen flex justify-between z-10 bg-gradient-to-b	from-black">
      <img src={LOGO} className="w-40 " />
      {subscribeUser.length > 0 && (
        <div className="flex w-[200px] justify-between items-center mr-5 ">
          <h2 className=" text-purple-800">Hi, {subscribeUser[0]?.name}</h2>
          <button
            className="border rounded-lg p-2 m-2 bg-green-400"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  dispatchUser(removeDetail());
                  navigate("/");
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
