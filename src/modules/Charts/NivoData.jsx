import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { nivoData } from "../Data/Data";
import { setNivo } from "./ChartsSlice";

export const NivoData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Dataset = nivoData.map((country) => ({
      id: country.id,
      color: country.color,
      data: country.data.map((trans) => ({
        x: trans.x,
        y: trans.y,
      })),
    }));
    dispatch(setNivo(Dataset));
  }, [dispatch]);

  return null;
};
