import { createSlice } from "@reduxjs/toolkit";

const ChartsSlice = createSlice({
  name: "charts",
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
    chartistData: {
      labels: [],
      series: [],
    },
  },
  reducers: {
    setChart: (state, action) => {
      state.chartData = action.payload;
    },
    setRechart: (state, action) => {
      state.rechartData = action.payload;
    },
    setChartist: (state, action) => {
      state.chartistData = action.payload;
    },
  },
});

export const { setChart, setRechart, setChartist } = ChartsSlice.actions;
export default ChartsSlice.reducer;
