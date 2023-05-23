import { Chart, CategoryScale } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

Chart.register(CategoryScale);

const PieChart = () => {
  const PData = useSelector((state) => state.charts.chartData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Chart.js") {
    return null;
  }

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Pie Chart</div>
      <Pie
        data={PData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users gained / lost between 2016 to 2020",
              color: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
