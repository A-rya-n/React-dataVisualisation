import { useEffect } from "react";
import { Chart, CategoryScale } from "chart.js/auto";
import { Data } from "../Data/Data";
import { Pie } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { setPieData } from "./PieSlice";

Chart.register(CategoryScale);

const PieChart = () => {
  const PData = useSelector((state) => state.pie.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const PieDataset = {
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
      ],
    };

    dispatch(setPieData(PieDataset));
  }, [dispatch]);
  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Pie Chart</div>
      <Pie
        data={PData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users gained between 2016 to 2020",
              color: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
