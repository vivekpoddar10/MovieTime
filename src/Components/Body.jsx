import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import Login from "./Login";
import Browse from "./Browse";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
import { auth } from "../Utils/firebase";
import { addDetail, removeDetail } from "../Utils/UserSlice";

const Body = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/forgot",
      element: <Forgot />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

 
  return <RouterProvider router={router} />;
};
export default Body;
