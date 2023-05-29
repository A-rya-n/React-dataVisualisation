import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const LineInflux = () => {
  const select = useSelector((state) => state.dropdown.selected);
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.144:5000/led_status")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((d) => ({
          time: d.Date,
          power: d.Value,
        }));
        setDataset(formattedData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (select !== "Recharts") {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
          <div className="font-sans font-medium mb-5">Line Chart - Influx </div>
          <LineChart width={800} height={400} data={dataset}>
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
      </div>
    </div>
  );
};

export default LineInflux;
