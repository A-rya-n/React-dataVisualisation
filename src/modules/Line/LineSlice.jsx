import { createSlice } from "@reduxjs/toolkit";

const LineSlice = createSlice({
  name: "line",
  initialState: {
    data: {
      labels: [],
      datasets: [],
    },
  },
  reducers: {
    setLineData: (state, action) => {
      state.data = action?.payload;
    },
  },
});

export const { setLineData } = LineSlice.actions;
export default LineSlice.reducer;
