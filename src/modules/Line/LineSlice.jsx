import { createSlice } from "@reduxjs/toolkit";

const LineSlice = createSlice({
  name: "line",
  initialState: {
    chartData: {
      labels: [],
      datasets: [],
    },
    rechartData: {
      year: "",
      Usersg: "",
      Usersl: "",
    },
  },
  reducers: {
    setLineChart: (state, action) => {
      state.chartData = action.payload;
    },
    setLineRechart: (state, action) => {
      state.rechartData = action.payload;
    },
  },
});

export const { setLineChart, setLineRechart } = LineSlice.actions;
export default LineSlice.reducer;
