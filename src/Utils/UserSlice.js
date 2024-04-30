import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
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

export const { addDetail, removeDetail } = UserSlice.actions;
export default UserSlice.reducer;
