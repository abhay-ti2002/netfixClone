import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "Profile Image",
  initialState: {
    image: null,
  },
  reducers: {
    addProfileImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { addProfileImage } = profileSlice.actions;

export default profileSlice.reducer;
