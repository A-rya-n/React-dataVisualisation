import { useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarRechart = () => {
  const BData = useSelector((state) => state.charts.rechartData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Recharts") {
    return null;
  }

  return (
    <div className="">
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Bar Chart</div>
          <BarChart width={500} height={300} data={BData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Usersg" fill="#8884d8" />
            <Bar dataKey="Usersl" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Stacked Bar Chart</div>
          <BarChart width={500} height={200} data={BData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Usersg" fill="#8884d8" stackId="a" />
            <Bar dataKey="Usersl" fill="#82ca9d" stackId="a" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default BarRechart;
