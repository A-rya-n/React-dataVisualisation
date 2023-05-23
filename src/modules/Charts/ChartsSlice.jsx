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
  },
  reducers: {
    setChart: (state, action) => {
      state.chartData = action.payload;
    },
    setRechart: (state, action) => {
      state.rechartData = action.payload;
    },
  },
});

export const { setChart, setRechart } = ChartsSlice.actions;
export default ChartsSlice.reducer;
