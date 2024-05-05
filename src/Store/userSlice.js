import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    details: [],
  },
  reducers: {
    addDetail(state, action) {
      state.details.push(action.payload);
    },
    removeDetail(state) {
      state.details.pop();
    },
  },
});

export const { addDetail, removeDetail } = userSlice.actions;
export default userSlice.reducer;
