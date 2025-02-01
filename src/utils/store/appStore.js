import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import backgroundTrailerReducer from "./trailerSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSliceReducer,
    trailer: backgroundTrailerReducer,
  },
});

export default appStore;
