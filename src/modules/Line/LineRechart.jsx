import { useEffect } from "react";
import { Data } from "../Data/Data";
import { useSelector, useDispatch } from "react-redux";
import { setLineRechart } from "./LineSlice";
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
  const LData = useSelector((state) => state.line.rechartData);
  const dispatch = useDispatch();

  useEffect(() => {
    const LineDataset = Data.map((data) => ({
      year: data.year,
      Usersg: data.userGain,
      Usersl: data.userLost,
    }));
    dispatch(setLineRechart(LineDataset));
  }, [dispatch]);

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Line Chart</div>
      <LineChart width={900} height={500} data={LData}>
        {console.log(LData)}
        <CartesianGrid />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Usersg"
          name="Users gained"
          stroke="#8884d8"
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
