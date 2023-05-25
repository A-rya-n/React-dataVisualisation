// import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from '@nivo/line'
import { useSelector } from "react-redux";
// import { useEffect } from "react";

const BarNivo = () => {
  //   const BData = useSelector((state) => state.charts.nivoData);
  const select = useSelector((state) => state?.dropdown?.selected);
  var data = [
    {
      id: "japan",
      color: "hsl(15, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 263,
        },
        {
          x: "helicopter",
          y: 29,
        },
        {
          x: "boat",
          y: 197,
        },
        {
          x: "train",
          y: 237,
        },
        {
          x: "subway",
          y: 61,
        },
        {
          x: "bus",
          y: 283,
        },
        {
          x: "car",
          y: 195,
        },
        {
          x: "moto",
          y: 237,
        },
        {
          x: "bicycle",
          y: 185,
        },
        {
          x: "horse",
          y: 142,
        },
        {
          x: "skateboard",
          y: 181,
        },
        {
          x: "others",
          y: 7,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(260, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 121,
        },
        {
          x: "helicopter",
          y: 38,
        },
        {
          x: "boat",
          y: 203,
        },
        {
          x: "train",
          y: 79,
        },
        {
          x: "subway",
          y: 45,
        },
        {
          x: "bus",
          y: 119,
        },
        {
          x: "car",
          y: 107,
        },
        {
          x: "moto",
          y: 26,
        },
        {
          x: "bicycle",
          y: 189,
        },
        {
          x: "horse",
          y: 298,
        },
        {
          x: "skateboard",
          y: 171,
        },
        {
          x: "others",
          y: 283,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(112, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 133,
        },
        {
          x: "helicopter",
          y: 171,
        },
        {
          x: "boat",
          y: 251,
        },
        {
          x: "train",
          y: 163,
        },
        {
          x: "subway",
          y: 286,
        },
        {
          x: "bus",
          y: 44,
        },
        {
          x: "car",
          y: 182,
        },
        {
          x: "moto",
          y: 88,
        },
        {
          x: "bicycle",
          y: 47,
        },
        {
          x: "horse",
          y: 109,
        },
        {
          x: "skateboard",
          y: 16,
        },
        {
          x: "others",
          y: 161,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(182, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 48,
        },
        {
          x: "helicopter",
          y: 135,
        },
        {
          x: "boat",
          y: 146,
        },
        {
          x: "train",
          y: 44,
        },
        {
          x: "subway",
          y: 46,
        },
        {
          x: "bus",
          y: 144,
        },
        {
          x: "car",
          y: 98,
        },
        {
          x: "moto",
          y: 163,
        },
        {
          x: "bicycle",
          y: 8,
        },
        {
          x: "horse",
          y: 54,
        },
        {
          x: "skateboard",
          y: 177,
        },
        {
          x: "others",
          y: 158,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(221, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 225,
        },
        {
          x: "helicopter",
          y: 122,
        },
        {
          x: "boat",
          y: 82,
        },
        {
          x: "train",
          y: 52,
        },
        {
          x: "subway",
          y: 55,
        },
        {
          x: "bus",
          y: 105,
        },
        {
          x: "car",
          y: 241,
        },
        {
          x: "moto",
          y: 113,
        },
        {
          x: "bicycle",
          y: 52,
        },
        {
          x: "horse",
          y: 286,
        },
        {
          x: "skateboard",
          y: 143,
        },
        {
          x: "others",
          y: 114,
        },
      ],
    },
  ];

  if (select !== "Nivo") {
    return null;
  }

  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Bar Chart</div>
      {console.log(data)}
      <ResponsiveLine
        data={data}
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

export default BarNivo;
