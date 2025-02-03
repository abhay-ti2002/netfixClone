import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import backgroundTrailerReducer from "./trailerSlice";
import prfileSliceReducer from "./profileSlice";
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSliceReducer,
    trailer: backgroundTrailerReducer,
    ProfileImage: prfileSliceReducer,
  },
});

export default appStore;
