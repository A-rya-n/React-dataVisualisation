import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInflux, setNivoInflux } from "./ChartsSlice";

export const InfluxData = () => {
  const dispatch = useDispatch();

  const dataAccumulator = [];
  const dataAccumulatorNivo = [];

  let idCounter = 0;

  useEffect(() => {
    function fetchData() {
      fetch("http://192.168.1.144:5000/led_status")
        .then((response) => response.json())
        .then((data) => {
          const formattedData = data.map((d) => ({
            time: formatTime(d.Date),
            power: d.Value,
          }));
          const formattedDataNivo = [
            {
              id: ++idCounter,
              data: data.map((d) => ({
                x: formatTime(d.Date),
                y: d.Value,
              })),
            },
          ];

          dataAccumulator.push(formattedData);
          dataAccumulatorNivo.push(formattedDataNivo);

          if (
            dataAccumulator.length === 24 &&
            dataAccumulatorNivo.length === 24
          ) {
            dataAccumulator.splice(0, dataAccumulator - 12);
            dataAccumulatorNivo.splice(0, dataAccumulatorNivo - 12);
          }

          dispatch(setInflux(...dataAccumulator));
          dispatch(setNivoInflux(...dataAccumulatorNivo));

          dataAccumulator.length = 0;
          dataAccumulatorNivo.length = 0;
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
