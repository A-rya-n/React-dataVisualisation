import logo from "./assets/DataIcon.png";
import Dropdown from "./modules/dropdown/Dropdown";

import { ChartsData } from "./modules/Charts/ChartsData";
import { ReChartsData } from "./modules/Charts/ReChartsData";
// import { VictoryData } from "./modules/Charts/VictoryData";

import AllChartsjs from "./modules/AllCharts/AllChartsjs";
import AllRecharts from "./modules/AllCharts/AllRecharts";
// import AllVictory from "./modules/AllCharts/AllVictory";

const App = () => {
  return (
    <div className="bg-slate-300 h-screen flex-col">
      <div className="bg-slate-500 w-full h-16 mb-14">
        <img src={logo} alt="App logo" className="ml-5 pt-1" />
      </div>
      <div className="bg-slate-500 w-4/5 h-4/5 rounded-xl shadow-xl m-auto flex-col flex">
        <div className="mx-auto mt-4 text-lg text-slate-50 font-medium">
          Data Visualisation
        </div>
        <div className="w-fit mt-4 ml-8">
          <Dropdown />
        </div>
        <div className="flex-wrap flex gap-10 m-auto">
          <ChartsData />
          <ReChartsData />
          {/* <VictoryData /> */}

          <AllChartsjs />
          <AllRecharts />
          {/* <AllVictory /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
