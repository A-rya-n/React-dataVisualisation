import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Data } from "../Data/Data";
import { setNivo } from "./ChartsSlice";

export const NivoData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Dataset = Data.map((data) => ({
      id: data.year,
      data: [{ x: data.userGain, y: data.userLost }],
    }));
    dispatch(setNivo(Dataset));
  }, [dispatch]);

  return null;
};

// [
//   {
//     id: 1,
//     data: [
//       {
//         x: "palne",
//         y: 12,
//       },
//     ],
//   },
// ];
