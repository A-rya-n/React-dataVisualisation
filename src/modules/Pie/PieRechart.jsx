import { useSelector } from "react-redux";
import { Pie, PieChart, Tooltip, Legend } from "recharts";

const PieRechart = () => {
  const PData = useSelector((state) => state.charts.rechartData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Recharts") {
    return null;
  }

  return (
    <div className="">
      <div className="flex flex-wrap gap-10">
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Pie Chart</div>
          <PieChart width={300} height={300}>
            <Pie
              data={PData}
              dataKey="year"
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              label
            />
            <Pie
              data={PData}
              dataKey="Usersg"
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={85}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
        <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl ml-5">
          <div className="font-sans font-medium mb-5">Pie Chart II</div>
          <PieChart width={400} height={400}>
            <Pie
              isAnimationActive={false}
              data={PData}
              dataKey="year"
              cx="20%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Pie
              data={PData}
              dataKey="Usersg"
              cx={250}
              cy={120}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default PieRechart;
