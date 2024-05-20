import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import visibilityReducer from "./visibilitySlice";
import langReducer from "./langConfig";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    visible: visibilityReducer,
    language: langReducer,
  },
});

export default appStore;
