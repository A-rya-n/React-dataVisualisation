import { useSelector } from "react-redux";
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const LineInflux = () => {
  const Idata = useSelector((state) => state.charts.influxData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Recharts") {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
          <div className="font-sans font-medium mb-5">Line Chart - Influx </div>
          <LineChart width={800} height={400} data={Idata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="power"
              name="On/Off"
              stroke="#82ca9d"
              strokeWidth={2}
              fill="#82ca9d"
            />
          </LineChart>
        </div>
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Bar Chart - Influx </div>
          <BarChart width={500} height={300} data={Idata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="power" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default LineInflux;
