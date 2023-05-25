import { Chart, CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

Chart.register(CategoryScale);

const BarChart = () => {
  const BData = useSelector((state) => state.charts.chartData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Chart.js") {
    return null;
  }

  return (
    <div
      className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl"
      style={{ width: 500, height: 300 }}
    >
      <div className="font-sans font-medium mb-5">Bar Chart</div>
      <Bar
        data={BData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users gained / lost between 2016 to 2020",
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
