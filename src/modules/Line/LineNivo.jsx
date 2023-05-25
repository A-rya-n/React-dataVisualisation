import { useSelector } from "react-redux";
import { ResponsiveLine } from "@nivo/line";

const LineNivo = () => {
  const LData = useSelector((state) => state.charts.nivoData);
  const select = useSelector((state) => state.dropdown.selected);

  const dataset = [
    {
      id: "japan",
      color: "hsl(60, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 166,
        },
        {
          x: "helicopter",
          y: 41,
        },
        {
          x: "boat",
          y: 37,
        },
        {
          x: "train",
          y: 205,
        },
        {
          x: "subway",
          y: 259,
        },
        {
          x: "bus",
          y: 268,
        },
        {
          x: "car",
          y: 59,
        },
        {
          x: "moto",
          y: 156,
        },
        {
          x: "bicycle",
          y: 192,
        },
        {
          x: "horse",
          y: 12,
        },
        {
          x: "skateboard",
          y: 199,
        },
        {
          x: "others",
          y: 290,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(347, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 190,
        },
        {
          x: "helicopter",
          y: 234,
        },
        {
          x: "boat",
          y: 52,
        },
        {
          x: "train",
          y: 162,
        },
        {
          x: "subway",
          y: 133,
        },
        {
          x: "bus",
          y: 213,
        },
        {
          x: "car",
          y: 44,
        },
        {
          x: "moto",
          y: 183,
        },
        {
          x: "bicycle",
          y: 294,
        },
        {
          x: "horse",
          y: 148,
        },
        {
          x: "skateboard",
          y: 288,
        },
        {
          x: "others",
          y: 285,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(166, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 124,
        },
        {
          x: "helicopter",
          y: 12,
        },
        {
          x: "boat",
          y: 276,
        },
        {
          x: "train",
          y: 263,
        },
        {
          x: "subway",
          y: 212,
        },
        {
          x: "bus",
          y: 254,
        },
        {
          x: "car",
          y: 262,
        },
        {
          x: "moto",
          y: 57,
        },
        {
          x: "bicycle",
          y: 124,
        },
        {
          x: "horse",
          y: 256,
        },
        {
          x: "skateboard",
          y: 124,
        },
        {
          x: "others",
          y: 152,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(360, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 286,
        },
        {
          x: "helicopter",
          y: 268,
        },
        {
          x: "boat",
          y: 289,
        },
        {
          x: "train",
          y: 257,
        },
        {
          x: "subway",
          y: 121,
        },
        {
          x: "bus",
          y: 70,
        },
        {
          x: "car",
          y: 280,
        },
        {
          x: "moto",
          y: 187,
        },
        {
          x: "bicycle",
          y: 27,
        },
        {
          x: "horse",
          y: 15,
        },
        {
          x: "skateboard",
          y: 78,
        },
        {
          x: "others",
          y: 219,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(195, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 100,
        },
        {
          x: "helicopter",
          y: 140,
        },
        {
          x: "boat",
          y: 54,
        },
        {
          x: "train",
          y: 95,
        },
        {
          x: "subway",
          y: 116,
        },
        {
          x: "bus",
          y: 170,
        },
        {
          x: "car",
          y: 246,
        },
        {
          x: "moto",
          y: 274,
        },
        {
          x: "bicycle",
          y: 114,
        },
        {
          x: "horse",
          y: 198,
        },
        {
          x: "skateboard",
          y: 116,
        },
        {
          x: "others",
          y: 116,
        },
      ],
    },
  ];

  if (select !== "Nivo") {
    return null;
  }
  return (
    <div
      className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl"
      style={{ width: 700, height: 500 }}
    >
      <div className="font-sans font-medium mb-5">Line Chart</div>
      {console.log(dataset)}
      {console.log(LData)}
      <ResponsiveLine
        data={dataset}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
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
  );
};

export default LineNivo;
