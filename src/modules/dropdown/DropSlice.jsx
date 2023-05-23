import { createSlice } from "@reduxjs/toolkit";

const DropSlice = createSlice({
  name: "dropdown",
  initialState: {
    selected: null,
  },
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = DropSlice.actions;
export default DropSlice.reducer;
