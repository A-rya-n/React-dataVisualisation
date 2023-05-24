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
    victoryData: {
      x: "",
      y: "",
    },
  },
  reducers: {
    setChart: (state, action) => {
      state.chartData = action.payload;
    },
    setRechart: (state, action) => {
      state.rechartData = action.payload;
    },
    setVictory: (state, action) => {
      state.victoryData = action.payload;
    },
  },
});

export const { setChart, setRechart, setVictory } = ChartsSlice.actions;
export default ChartsSlice.reducer;
