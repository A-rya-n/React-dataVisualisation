import logo from "./assets/DataIcon.png";
import PieChart from "./modules/Pie/PieChart";
import BarChart from "./modules/Bar/BarChart";
import LineChart from "./modules/Line/LineChart";

const App = () => {
  return (
    <div className="bg-slate-300 h-screen flex-col">
      <div className="bg-slate-500 w-full h-16 mb-14">
        <img src={logo} alt="App logo" className="ml-5 pt-1" />
      </div>
      <div className="bg-slate-500 w-4/5 h-4/5 rounded-xl shadow-xl m-auto flex">
        <div className="m-auto flex-wrap flex gap-10">
          <PieChart />
          <BarChart />
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default App;
