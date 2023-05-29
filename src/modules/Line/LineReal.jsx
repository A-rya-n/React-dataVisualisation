import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReal } from "../Charts/ChartsSlice";
import {
  Line,
  LineChart,
  // Area,
  // AreaChart,
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

    socket.addEventListener("open", function () {
      socket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
      );
      socket.send(JSON.stringify({ type: "subscribe", symbol: "MSFT" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "UPOW" }));
      socket.send(JSON.stringify({ type: "subscribe", symbol: "EXCOF" }));
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);

      const timestamp = data.data[0].t;

      const dateObj = new Date(timestamp);
      const Time = dateObj.toLocaleTimeString();

      var BINANCEprice;
      var MSFTprice;
      var UPOWprice;
      var EXCOFprice;

      if (data.data[0].s === "BINANCE:BTCUSDT") {
        BINANCEprice = data.data[0].p;
      }
      if (data.data[0].s === "MSFT") {
        MSFTprice = data.data[0].p;
      }
      if (data.data[0].s === "UPOW") {
        UPOWprice = data.data[0].p;
      }
      if (data.data[0].s === "EXCOF") {
        EXCOFprice = data.data[0].p;
      }

      const dataset = {
        time: Time,
        price1: BINANCEprice,
        price2: MSFTprice,
        price3: UPOWprice,
        price4: EXCOFprice,
      };
      dataAccumulator.push(dataset);

      if (dataAccumulator.length === 10) {
        dataAccumulator.splice(0, 1);
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
          <LineChart width={800} height={400} data={RData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price1"
              name="Binance"
              stroke="#82ca9d"
              strokeWidth={2}
              fill="#82ca9d"
            />
            <Line
              type="monotone"
              dataKey="price2"
              name="Microsoft"
              stroke="#bd4051"
              strokeWidth={2}
              fill="#bd4051"
            />
            <Line
              type="monotone"
              dataKey="price3"
              name="UAN Power"
              stroke="#4287f5"
              strokeWidth={2}
              fill="#4287f5"
            />
            <Line
              type="monotone"
              dataKey="price4"
              name="EXO Tech"
              stroke="#42f54b"
              strokeWidth={2}
              fill="#42f54b"
            />
          </LineChart>
        </div>
        {/* <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
            <div className="font-sans font-medium mb-5">
              Area Chart - Real Time
            </div>
            <AreaChart width={600} height={400} data={RData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[27900.01, 28000.09]} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price2"
                name="Last price"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </div> */}
      </div>
    </div>
  );
};

export default LineReal;
