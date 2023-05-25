import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Data } from "../Data/Data";
import { setNivo } from "./ChartsSlice";

export const NivoData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Dataset = Data.map((data) => ({
      id: data.id,
      data: [
        { x: data.year, y: data.userGain },
        { x: data.year, y: data.userLost },
      ],
    }));
    dispatch(setNivo(Dataset));
  }, [dispatch]);

  return null;
};
