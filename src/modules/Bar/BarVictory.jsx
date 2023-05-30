import { useSelector } from "react-redux";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryStack } from "victory";

const BarVictory = () => {
  const BData = useSelector((state) => state.charts.victoryData);
  const select = useSelector((state) => state.dropdown.selected);
  const IData = useSelector((state) => state.charts.influxData);

  if (select !== "Victory") {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-10">
      <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
        <div className="font-sans font-medium mb-5">Bar Chart</div>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryStack>
            <VictoryBar data={BData} x="x" y="y" />
            <VictoryBar data={BData} x="x" y="z" />
          </VictoryStack>
        </VictoryChart>
      </div>
      <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
        <div className="font-sans font-medium mb-5">Bar Chart - Influx</div>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material} width={800}>
          <VictoryBar data={IData} x="time" y="power" />
        </VictoryChart>
      </div>
    </div>
  );
};

export default BarVictory;
