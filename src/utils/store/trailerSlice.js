import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
  name: "backgroundTrailer",
  initialState: {
    bgTrailer: null,
  },
  reducers: {
    addTrailer: (state, action) => {
      state.bgTrailer = action.payload;
    },
  },
});

export const { addTrailer } = trailerSlice.actions;

export default trailerSlice.reducer;
