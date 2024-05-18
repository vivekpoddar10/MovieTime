import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
  name: "Visibility",
  initialState: {
    searchComponent: false,
    userComponent: false,
  },
  reducers: {
    setSearchComponentVisibility(state) {
      state.searchComponent = !state.searchComponent;
    },
    setUserComponentVisibility(state) {
      state.userComponent = !state.userComponent;
    },
  },
});

export const { setSearchComponentVisibility, setUserComponentVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
