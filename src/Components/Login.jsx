import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

import { BG_URL } from "../Utils/Constants";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BG_URL} />
      </div>
      <div className="absolute flex flex-col border w-[500px] p-5 bg-slate-900 mx-[35%] my-24">
        <div className="text-white text-2xl m-2">Sign In</div>
        <input
          type="text"
          placeholder="Email or phone number"
          className="border border-white rounded-lg bg-black p-3 m-2 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-white rounded-lg bg-black p-3 m-2 text-white"
        />
        <button className="border bg-red-600 text-white m-2 p-3 rounded-lg">
          Sign In
        </button>
        <div className="text-white flex justify-center">OR</div>
        <button className="border bg-gray-500 text-white m-2 p-2 rounded-lg">
          Use a sign-in-code
        </button>
        <Link to="/forgot" className="text-white flex justify-center">
          Forgot Password?
        </Link>
        <div className="flex m-2">
          <input type="checkbox"></input>
          <div className="text-white m-2">Remember me</div>
        </div>
        <div className="text-white m-2">
          New to Netflix?{" "}
          <Link to="/signup" className="font-bold">
            Sign up now.
          </Link>
        </div>
        <div className="text-white m-2 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link className="text-sm text-blue-600">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
