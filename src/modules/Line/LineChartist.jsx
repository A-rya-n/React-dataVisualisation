import ChartistGraph from "react-chartist";
import { useSelector } from "react-redux";

const LineChartist = () => {
  const LData = useSelector((state) => state.charts.chartData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Chartist") {
    return null;
  }

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Line Chart</div>
      {console.log(LData)}
      <ChartistGraph data={LData} type="Line"/>
    </div>
  );
};

export default LineChartist;
