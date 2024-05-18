import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import visibilityReducer from "./visibilitySlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    visible: visibilityReducer,
  },
});

export default appStore;
