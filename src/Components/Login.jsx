// imports from the library
import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

//imports from the components
import { addDetail } from "../Store/userSlice";
import Header from "./Header";
import { auth } from "../Utils/firebase";
import { BG_URL } from "../Utils/Constants";
import ValidateEmailAndPassword from "../Utils/ValidateEmailAndPassword";

const Login = () => {
  //useState hook for storing the state
  const [isFormSignIn, setIsFormSignIn] = useState(true);
  const [formSignIn, setFormSignIn] = useState("SignIn");
  const [errorMessage, setErrorMessage] = useState(null);
  //useRef hook for referring the value stored in the input field
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  //useDispatch hook for triggering the action to update the redux store
  const dispatchUser = useDispatch();

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BG_URL} />
      </div>
      <div className="absolute flex flex-col border w-[500px] p-5 bg-black opacity-80 mx-[35%] my-24 text-white">
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="text-white flex flex-col m-3 p-2"
        >
          <label className="text-lg font-bold">{formSignIn}</label>
          {!isFormSignIn && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="border border-white rounded-lg bg-black p-3 m-2"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="border border-white rounded-lg bg-black p-3 m-2 text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="border border-white rounded-lg bg-black p-3 m-2 text-white"
          />
          <label className="text-red-400">{errorMessage}</label>
          <button
            className="border bg-red-600 text-white m-2 p-3 rounded-lg"
            onClick={() => {
              //check whether the email and password are in correct regex or not
              const message = ValidateEmailAndPassword(
                email.current.value,
                password.current.value
              );
              //if any of the field is not valid, display the error
              setErrorMessage(message);
              if (message != null) return;

              /**
               * TODO: create a new user with email and password
               * TODO: update the user details
               * TODO: add the details to the user slice
            
               */
              if (!isFormSignIn) {
                createUserWithEmailAndPassword(
                  auth,
                  email.current.value,
                  password.current.value
                )
                  .then((UserCredential) => {
                    const user = UserCredential.user;
                    updateProfile(user, {
                      displayName: fullName.current.value,
                    })
                      .then(() => {
                        const { uid, displayName, email } = user;
                        dispatchUser(
                          addDetail({
                            id: uid,
                            name: displayName,
                            email: email,
                          })
                        );
                      })
                      .catch((error) => {
                        setErrorMessage(`${error.code} - ${error.message}`);
                      });
                  })
                  .catch((error) => {
                    setErrorMessage(`${error.code} - ${error.message}`);
                  });
              } else {
                // TODO: login the existing user
                signInWithEmailAndPassword(
                  auth,
                  email.current.value,
                  password.current.value
                )
                  .then((UserCredential) => {
                    const user = UserCredential.user;
                  })
                  .catch((error) => {
                    setErrorMessage(`${error.code} - ${error.message}`);
                  });
              }
            }}
          >
            {formSignIn}
          </button>
        </form>
        <div
          className=" m-2 flex cursor-pointer"
          onClick={() => {
            if (isFormSignIn) {
              setFormSignIn("SignUp");
              setIsFormSignIn(false);
            } else {
              setFormSignIn("SignIn");
              setIsFormSignIn(true);
            }
          }}
        >
          {isFormSignIn
            ? "New to Netflix? SignUp now"
            : "Already have a account? Login now"}
        </div>
      </div>
    </div>
  );
};

export default Login;
