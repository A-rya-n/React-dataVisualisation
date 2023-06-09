import { Chart, CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

Chart.register(CategoryScale);

const LineChart = () => {
  const LData = useSelector((state) => state.charts.chartData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Chart.js") {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-10">
      <div
        className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl"
        style={{ width: 500, height: 300 }}
      >
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
    </div>
  );
};

export default LineChart;
