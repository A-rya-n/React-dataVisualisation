import { useSelector } from "react-redux";
import { VictoryLine, VictoryChart, VictoryTheme, VictoryStack } from "victory";

const LineVictory = () => {
  const LData = useSelector((state) => state.charts.rechartData);
  const select = useSelector((state) => state.dropdown.selected);
  const IData = useSelector((state) => state.charts.influxData);

  if (select !== "Victory") {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-10">
      <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
        <div className="font-sans font-medium mb-5">Line Chart</div>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryStack>
            <VictoryLine
              data={LData}
              x="year"
              y="Usersg"
              style={{
                data: { stroke: "#589117" },
                parent: { border: "1px solid #ccc" },
              }}
            />
            <VictoryLine
              data={LData}
              x="year"
              y="Usersl"
              style={{
                data: { stroke: "#91171d" },
                parent: { border: "1px solid #ccc" },
              }}
            />
          </VictoryStack>
        </VictoryChart>
      </div>
      <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
        <div className="font-sans font-medium mb-5">Line Chart - Influx</div>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material} width={800}>
          <VictoryLine
            data={IData}
            x="time"
            y="power"
            style={{
              data: { stroke: "#589117" },
              parent: { border: "1px solid #ccc" },
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default LineVictory;
