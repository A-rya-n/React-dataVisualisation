import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
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
    <div className="">
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Line Chart</div>
          <LineChart width={500} height={200} data={LData} syncId="LineID">
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
              strokeWidth={2}
              fill="#82ca9d"
            />
            <Line
              type="monotone"
              dataKey="Usersl"
              name="Users Lost"
              stroke="#8884d8"
              strokeWidth={2}
              fill="#8884d8"
            />
          </LineChart>
        </div>
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
          <div className="font-sans font-medium mb-5">Area Chart</div>
          <AreaChart width={500} height={200} data={LData} syncId="lineID">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="Usersg"
              name="Users gained"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Usersl"
              name="Users lost"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default LineRechart;
