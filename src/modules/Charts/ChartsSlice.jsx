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
      z: "",
    },
    nivoData: {
      id: "",
      data: [],
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
    setNivo: (state, action) => {
      state.nivoData = action.payload;
    },
  },
});

export const { setChart, setRechart, setVictory, setNivo } =
  ChartsSlice.actions;
export default ChartsSlice.reducer;
