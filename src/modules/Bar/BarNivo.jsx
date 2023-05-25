import { ResponsiveBar } from "@nivo/bar";
import { useSelector } from "react-redux";

const BarNivo = () => {
  const BData = useSelector((state) => state.charts.nivoData);
  const select = useSelector((state) => state.dropdown.selected);

  const dataset = [
    {
      country: "AD",
      "hot dog": 72,
      "hot dogColor": "hsl(123, 70%, 50%)",
      burger: 136,
      burgerColor: "hsl(285, 70%, 50%)",
      sandwich: 91,
      sandwichColor: "hsl(307, 70%, 50%)",
      kebab: 120,
      kebabColor: "hsl(327, 70%, 50%)",
      fries: 46,
      friesColor: "hsl(73, 70%, 50%)",
      donut: 19,
      donutColor: "hsl(278, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 101,
      "hot dogColor": "hsl(300, 70%, 50%)",
      burger: 174,
      burgerColor: "hsl(311, 70%, 50%)",
      sandwich: 140,
      sandwichColor: "hsl(52, 70%, 50%)",
      kebab: 46,
      kebabColor: "hsl(223, 70%, 50%)",
      fries: 5,
      friesColor: "hsl(175, 70%, 50%)",
      donut: 120,
      donutColor: "hsl(317, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 80,
      "hot dogColor": "hsl(71, 70%, 50%)",
      burger: 140,
      burgerColor: "hsl(122, 70%, 50%)",
      sandwich: 198,
      sandwichColor: "hsl(237, 70%, 50%)",
      kebab: 199,
      kebabColor: "hsl(358, 70%, 50%)",
      fries: 35,
      friesColor: "hsl(59, 70%, 50%)",
      donut: 34,
      donutColor: "hsl(196, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 135,
      "hot dogColor": "hsl(339, 70%, 50%)",
      burger: 6,
      burgerColor: "hsl(48, 70%, 50%)",
      sandwich: 53,
      sandwichColor: "hsl(175, 70%, 50%)",
      kebab: 40,
      kebabColor: "hsl(44, 70%, 50%)",
      fries: 58,
      friesColor: "hsl(304, 70%, 50%)",
      donut: 52,
      donutColor: "hsl(27, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 198,
      "hot dogColor": "hsl(191, 70%, 50%)",
      burger: 139,
      burgerColor: "hsl(52, 70%, 50%)",
      sandwich: 26,
      sandwichColor: "hsl(239, 70%, 50%)",
      kebab: 102,
      kebabColor: "hsl(341, 70%, 50%)",
      fries: 94,
      friesColor: "hsl(73, 70%, 50%)",
      donut: 25,
      donutColor: "hsl(185, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 160,
      "hot dogColor": "hsl(294, 70%, 50%)",
      burger: 148,
      burgerColor: "hsl(333, 70%, 50%)",
      sandwich: 7,
      sandwichColor: "hsl(153, 70%, 50%)",
      kebab: 62,
      kebabColor: "hsl(353, 70%, 50%)",
      fries: 23,
      friesColor: "hsl(112, 70%, 50%)",
      donut: 124,
      donutColor: "hsl(215, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 191,
      "hot dogColor": "hsl(127, 70%, 50%)",
      burger: 45,
      burgerColor: "hsl(135, 70%, 50%)",
      sandwich: 193,
      sandwichColor: "hsl(99, 70%, 50%)",
      kebab: 128,
      kebabColor: "hsl(180, 70%, 50%)",
      fries: 138,
      friesColor: "hsl(122, 70%, 50%)",
      donut: 176,
      donutColor: "hsl(10, 70%, 50%)",
    },
  ];

  if (select !== "Nivo") {
    return null;
  }

  return (
    <div
      className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl"
      style={{ height: 500, width: 750 }}
    >
      <div className="font-sans font-medium mb-5">Bar Chart</div>
      {console.log(dataset)}
      {console.log(BData)}
      <ResponsiveBar
        data={dataset}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </div>
  );
};

export default BarNivo;
