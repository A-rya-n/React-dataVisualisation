import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Data } from "../Data/Data";
import { setVictory } from "./ChartsSlice";

export const VictoryData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Dataset = Data.map((data) => ({
      x: data.year,
      y: data.userGain,
      z: data.userLost,
    }));
    dispatch(setVictory(Dataset));
  }, [dispatch]);

  return null;
};
