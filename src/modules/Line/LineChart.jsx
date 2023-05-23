import { useEffect } from "react";
import { Chart, CategoryScale } from "chart.js/auto";
import { Data } from "../Data/Data";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { setLineChart } from "./LineSlice";

Chart.register(CategoryScale);

const LineChart = () => {
  const LData = useSelector((state) => state.line.chartData);
  const dispatch = useDispatch();

  useEffect(() => {
    const LineDataset = {
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

    dispatch(setLineChart(LineDataset));
  }, [dispatch]);

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Line Chart</div>
      <Line
        data={LData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Users gained / lost between 2016 to 2020`,
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
