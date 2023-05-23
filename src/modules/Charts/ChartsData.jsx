import { Data } from "../Data/Data";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setChart } from "./ChartsSlice";

export const ChartsData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Dataset = {
      labels: Data.map((data) => data.year),
      datasets: [
        {
          label: "Users gained",
          data: Data.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Users lost",
          data: Data.map((data) => data.userLost),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };

    dispatch(setChart(Dataset));
  }, [dispatch]);

  return null;
};
