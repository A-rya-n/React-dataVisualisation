import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";

import LineRechart from "../Line/LineRechart";
import BarRechart from "../Bar/BarRechart";
import PieRechart from "../Pie/PieRechart";

import { useSelector } from "react-redux";

export default function AllRecharts() {
  const select = useSelector((state) => state.dropdown.selected);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (select !== "Recharts") {
    return null;
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            centered
          >
            <Tab icon={<ShowChartIcon />} label="Line Charts" value="1" />
            <Tab icon={<BarChartIcon />} label="Bar Charts" value="2" />
            <Tab icon={<PieChartIcon />} label="Pie Charts" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <LineRechart />
        </TabPanel>
        <TabPanel value="2">
          <BarRechart />
        </TabPanel>
        <TabPanel value="3">
          <PieRechart />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
