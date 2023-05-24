import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Data } from "../Data/Data";
import { setChartist } from "./ChartsSlice";

export const ChartistData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Dataset = Data.map((data) => ({
      labels: data.year,
      series: data.userGain
    }));
    dispatch(setChartist(Dataset));
  }, [dispatch]);

  return null;
};
