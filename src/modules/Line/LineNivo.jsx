import { useSelector } from "react-redux";
import { ResponsiveLine } from "@nivo/line";

const LineNivo = () => {
  const LData = useSelector((state) => state.charts.nivoData);
  const select = useSelector((state) => state.dropdown.selected);
  const IData = useSelector((state) => state.charts.nivoInfluxData);

  if (select !== "Nivo") {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-5">
      <div
        className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl"
        style={{ width: 650, height: 500 }}
      >
        <div className="font-sans font-medium mb-5">Line Chart</div>
        <ResponsiveLine
          data={LData}
          margin={{ top: 50, right: 110, bottom: 70, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
      {IData.data.length !== 0 ? (
        <div
          className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl"
          style={{ width: 750, height: 500 }}
        >
          <div className="font-sans font-medium mb-5">Line Chart - Influx</div>
          <ResponsiveLine
            data={IData}
            margin={{ top: 20, right: 10, bottom: 70, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Time",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Power",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
          />
        </div>
      ) : null}
    </div>
  );
};

export default LineNivo;
