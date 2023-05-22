import { Chart, CategoryScale } from "chart.js/auto";
import { useState } from "react";
import { PieData } from "../Data/Data";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

const PieChart = () => {
  const [Data, setData] = useState({
    labels: PieData.map((data) => data.year),
    datasets: [
      {
        label: "Users gained",
        data: PieData.map((data) => data.userGain),
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
      <div className="font-sans font-medium mb-5">Pie Chart</div>
      <Pie
        data={Data}
        options={{
          Plugins: {
            title: {
              display: true,
              text: "Users gained between 2016 to 2020",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
