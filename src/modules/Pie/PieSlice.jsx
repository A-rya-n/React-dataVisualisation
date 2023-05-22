import { createSlice } from "@reduxjs/toolkit";

const PieSlice = createSlice({
  name: "pie",
  initialState: {
    data: {
      labels: [],
      datasets: [],
    },
  },
  reducers: {
    setPieData: (state, action) => {
      state.data = action?.payload;
    },
  },
});

export const { setPieData } = PieSlice.actions;
export default PieSlice.reducer;
