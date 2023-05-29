import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReal } from "../Charts/ChartsSlice";
import {
  Line,
  LineChart,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const LineReal = () => {
  const dispatch = useDispatch();
  const RData = useSelector((state) => state.charts.realData);
  const select = useSelector((state) => state.dropdown.selected);

  const dataAccumulator = [];

  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.finnhub.io?token=cho606hr01qrto3vbrugcho606hr01qrto3vbrv0"
    );

    // Connection opened -> Subscribe
    socket.addEventListener("open", function (event) {
      socket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
      );
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);
      const timestamp = data.data[0].t;

      const dateObj = new Date(timestamp);
      const Time = dateObj.toLocaleTimeString();
      const Price = data.data[0].p;

      const dataset = {
        time: Time,
        price: Price,
      };
      dataAccumulator.push(dataset);

      if (dataAccumulator.length === 12) {
        dataAccumulator.splice(1, 10);
      }

      dispatch(setReal([...dataAccumulator]));
    });

    // Clean up the WebSocket connection
    return () => {
      socket.close();
    };
  }, [dispatch]);

  if (select !== "Recharts") {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
          <div className="font-sans font-medium mb-5">
            Line Chart - Real Time
          </div>
          {console.log(RData)}
          <LineChart width={600} height={400} data={RData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[27990.01, 28026.09]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              name="Last price"
              stroke="#82ca9d"
              strokeWidth={2}
              fill="#82ca9d"
            />
          </LineChart>
        </div>
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
          <div className="font-sans font-medium mb-5">
            Area Chart - Real Time
          </div>
          <AreaChart width={600} height={400} data={RData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[28003.01, 28010.09]} />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              name="Last price"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default LineReal;
