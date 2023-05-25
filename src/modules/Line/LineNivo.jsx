import { useSelector } from "react-redux";
import { ResponsiveLine } from "@nivo/line";

const LineNivo = () => {
  const LData = useSelector((state) => state.charts.nivoData);
  const select = useSelector((state) => state.dropdown.selected);

  if (select !== "Nivo") {
    return null;
  }
  return (
    <div className="w-auto h-auto bg-slate-200 p-5 rounded-xl shadow-xl">
      <div className="font-sans font-medium mb-5">Line Chart</div>
      <ResponsiveLine
        data={LData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "linear" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
      />
    </div>
  );
};

export default LineNivo;
