import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineRechart = () => {
  const LData = useSelector((state) => state.charts.rechartData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Recharts") {
    return null;
  }

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Line Chart</div>
      <LineChart width={900} height={500} data={LData}>
        {console.log(LData)}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Usersg"
          name="Users gained"
          stroke="#82ca9d"
        />
        <Line
          type="monotone"
          dataKey="Usersl"
          name="Users Lost"
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  );
};

export default LineRechart;
