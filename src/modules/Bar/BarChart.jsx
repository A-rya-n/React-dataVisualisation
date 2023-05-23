import { Chart, CategoryScale } from "chart.js/auto";
import { useState } from "react";
import { Data } from "../Data/Data";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

Chart.register(CategoryScale);

const BarChart = () => {
  const select = useSelector((state) => state.dropdown.selected);

  const [BData] = useState({
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

  if (select !== "Chart.js") {
    return null;
  }

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Bar Chart</div>
      <Bar
        data={BData}
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

export default BarChart;
