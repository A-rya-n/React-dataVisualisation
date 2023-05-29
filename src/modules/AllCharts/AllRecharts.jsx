import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";

import LineRechart from "../Line/LineRechart";
import BarRechart from "../Bar/BarRechart";
import PieRechart from "../Pie/PieRechart";
import LineReal from "../Line/LineReal";
import LineInflux from "../Line/LineInflux";

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
            <Tab
              icon={<ShowChartIcon />}
              label="Line Charts - Real Time"
              value="4"
            />
            <Tab
              icon={<ShowChartIcon />}
              label="Line Charts - Influx data"
              value="5"
            />
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
        <TabPanel value="4">
          <LineReal />
        </TabPanel>
        <TabPanel value="5">
          <LineInflux />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
