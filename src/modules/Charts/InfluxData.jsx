import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInflux } from "./ChartsSlice";

export const InfluxData = () => {
  const dispatch = useDispatch();

  const dataAccumulator = [];

  useEffect(() => {
    function fetchData() {
      fetch("http://192.168.1.144:5000/led_status")
        .then((response) => response.json())
        .then((data) => {
          const formattedData = data.map((d) => ({
            time: formatTime(d.Date),
            power: d.Value,
          }));

          dataAccumulator.push(formattedData);

          if (dataAccumulator.length === 24) {
            dataAccumulator.splice(0, dataAccumulator - 12);
          }

          dispatch(setInflux(...dataAccumulator));
          dataAccumulator.length = 0;
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

  return null;
};
