import { useSelector } from "react-redux";
import { ResponsivePie } from "@nivo/pie";

const PieNivo = () => {
  const select = useSelector((state) => state.dropdown.selected);

  const dataset = [
    {
      id: "c",
      label: "c",
      value: 27,
      color: "hsl(14, 70%, 50%)",
    },
    {
      id: "haskell",
      label: "haskell",
      value: 20,
      color: "hsl(191, 70%, 50%)",
    },
    {
      id: "javascript",
      label: "javascript",
      value: 412,
      color: "hsl(3, 70%, 50%)",
    },
    {
      id: "elixir",
      label: "elixir",
      value: 335,
      color: "hsl(152, 70%, 50%)",
    },
    {
      id: "hack",
      label: "hack",
      value: 430,
      color: "hsl(31, 70%, 50%)",
    },
  ];

  if (select !== "Nivo") {
    return null;
  }

  return (
    <div
      className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl"
      style={{ width: 750, height: 500 }}
    >
      <div className="font-sans font-medium mb-5">Pie Chart</div>
      {console.log(dataset)}
      <ResponsivePie
        data={dataset}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieNivo;
