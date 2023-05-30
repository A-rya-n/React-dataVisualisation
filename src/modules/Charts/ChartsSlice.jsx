import { createSlice } from "@reduxjs/toolkit";

const ChartsSlice = createSlice({
  name: "charts",
  initialState: {
    chartData: {
      labels: [],
      datasets: [],
    },
    rechartData: {
      data: [],
    },
    victoryData: {
      data: [],
    },
    nivoData: {
      data: [],
    },
    realData: {
      data: [],
    },
    influxData: {
      data: [],
    },
    nivoInfluxData: {
      data: [],
    }
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
    setReal: (state, action) => {
      state.realData = action.payload;
    },
    setInflux: (state, action) => {
      state.influxData = action.payload;
    },
    setNivoInflux: (state, action) => {
      state.nivoInfluxData = action.payload;
    },
  },
});

export const { setChart, setRechart, setVictory, setNivo, setReal, setInflux, setNivoInflux } =
  ChartsSlice.actions;
export default ChartsSlice.reducer;
