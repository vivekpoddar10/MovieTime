import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { LOGO } from "../Utils/Constants";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addDetail, removeDetail } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";

import { FaMagnifyingGlass, FaUser } from "react-icons/fa6";

const Header = () => {
  const dispatchUser = useDispatch();
  const navigate = useNavigate();
  const subscribeUser = useSelector((store) => store.user.details);

  const [searchEnabled, setSearchEnabled] = useState(false);

  useEffect(() => {
    /**
     * * On Auth Changed, below action will be performed
     * TODO: Add the user details to user slice, and navigate to the browse page
     * TODO: Remove the user details from the user slice, and navigate to the login page
     * TODO: Restricts the routing, i.e. without authentication one can't go to browse page, or without logging out one can't go to login page
     */
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatchUser(
          addDetail({
            id: uid,
            name: displayName,
            email: email,
          })
        );
        navigate("/browse");
      } else {
        dispatchUser(removeDetail());
        navigate("/");
      }
    });

    // TODO: Unsubscribe the store, when the component unmounts
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute w-screen flex justify-between z-10 bg-gradient-to-b	from-black">
      <img src={LOGO} className="w-40 " />
      {subscribeUser.length > 0 && (
        <div className=" w-[90%] flex justify-between">
          <div className="flex pl-4 gap-2 items-center list-none text-white">
            <li className="cursor-pointer hover:underline-offset-2">Home</li>
            <li className="cursor-pointer hover:underline ">TV Shows</li>
            <li className="cursor-pointer hover:underline ">Movies</li>
          </div>
          <div className="flex  w-[45%] justify-end gap-3 items-center mr-5 ">
            <div className="flex items-center gap-1">
              {searchEnabled && (
                <input
                  type="text"
                  className="border-2 border-white rounded-xl bg-black"
                />
              )}
              <div
                className="text-white cursor-pointer"
                onClick={() => {
                  setSearchEnabled((prev) => !prev);
                }}
              >
                <FaMagnifyingGlass />
              </div>
            </div>

            <h2 className=" text-white">Hi, {subscribeUser[0]?.name} </h2>
            <div className="text-white text-xl">
              <FaUser />
            </div>
            <button
              className="border rounded-lg p-2 m-2 bg-green-400"
              onClick={() => {
                // TODO: Sign out the user
                signOut(auth)
                  .then(() => {})
                  .catch((error) => {
                    console.log(error.message);
                  });
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
