import { useDispatch } from "react-redux";
import { setSelected } from "./DropSlice";

const Dropdown = () => {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    dispatch(setSelected(e.target.value));
  };

  return (
    <div className="">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow-xl leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleSelect}
      >
        <option value="">Select chart</option>
        <option value="Chart.js">Chart.js</option>
        <option value="Recharts">Recharts</option>
      </select>
    </div>
  );
};

export default Dropdown;
