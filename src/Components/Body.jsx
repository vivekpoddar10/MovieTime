import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  
  // TODO: create routes for different pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Body;
