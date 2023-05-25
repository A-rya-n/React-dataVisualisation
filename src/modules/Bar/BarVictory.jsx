import { useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";

const BarVictory = () => {
  const BData = useSelector((state) => state.charts.victoryData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Victory") {
    return null;
  }

  return (
    <div className="">
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Bar Chart</div>
          <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            {/* <VictoryAxis
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={["2016", "2017", "2018", "2019", "2020"]}
            /> */}
            <VictoryStack>
              <VictoryBar data={BData} x="x" y="y" />
              <VictoryBar data={BData} x="x" y="z" />
            </VictoryStack>
          </VictoryChart>
        </div>
      </div>
    </div>
  );
};

export default BarVictory;
