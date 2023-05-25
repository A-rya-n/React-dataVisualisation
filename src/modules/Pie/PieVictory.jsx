import { useSelector } from "react-redux";
import { VictoryPie, VictoryTheme, VictoryStack } from "victory";

const PieVictory = () => {
  const PData = useSelector((state) => state.charts.victoryData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Victory") {
    return null;
  }

  return (
    <div className="">
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Pie Chart</div>
          {/* <VictoryStack> */}
          <VictoryPie data={PData} x="x" y="y" theme={VictoryTheme.material} />
          {/* <VictoryPie data={PData} x="x" y="z" /> */}
          {/* </VictoryStack> */}
        </div>
      </div>
    </div>
  );
};

export default PieVictory;
