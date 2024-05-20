import { createSlice } from "@reduxjs/toolkit";

const langConfig = createSlice({
  name: "langConfig",
  initialState: {
    lang: "English",
  },
  reducers: {
    selectLanguage(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { selectLanguage } = langConfig.actions;
export default langConfig.reducer;
