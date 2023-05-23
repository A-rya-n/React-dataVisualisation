import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Data } from "../Data/Data";
import { setRechart } from "./ChartsSlice";

export const ReChartsData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Dataset = Data.map((data) => ({
      year: data.year,
      Usersg: data.userGain,
      Usersl: data.userLost,
    }));
    dispatch(setRechart(Dataset));
  }, [dispatch]);

  return null;
};
