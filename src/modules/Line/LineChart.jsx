import { Chart, CategoryScale } from "chart.js/auto";
import { useState } from "react";
import { Data } from "../Data/Data";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const LineChart = () => {
  const [LData] = useState({
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
  });

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Line Chart</div>
      <Line
        data={LData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users gained between 2016 to 2020",
              color: "black",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
