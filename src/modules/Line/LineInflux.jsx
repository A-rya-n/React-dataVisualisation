import { useEffect, useState } from "react";
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
  const select = useSelector((state) => state.dropdown.selected);
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("http://192.168.1.144:5000/led_status")
        .then((response) => response.json())
        .then((data) => {
          const formattedData = data.map((d) => ({
            time: formatTime(d.Date),
            power: d.Value,
          }));
          setDataset((prevData) => accumulateData(prevData, formattedData));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  function formatTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleTimeString();
    return formattedDate;
  }

  function accumulateData(prevData, newData) {
    const accumulatedData = [...prevData, ...newData];

    if ((accumulatedData) => 24) {
      accumulatedData.splice(0, accumulatedData.length - 12);
    }

    return accumulatedData;
  }

  if (select !== "Recharts") {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
          <div className="font-sans font-medium mb-5">Line Chart - Influx </div>
          {console.log("dataset: ", dataset)}
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
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Bar Chart - Influx </div>
          <BarChart width={500} height={300} data={dataset}>
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
