import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";

import PieChart from "../Pie/PieChart";
import BarChart from "../Bar/BarChart";
import LineChart from "../Line/LineChart";
import LineReal from "../Line/LineReal";

import { useSelector } from "react-redux";

export default function AllChartsjs() {
  const select = useSelector((state) => state.dropdown.selected);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (select !== "Chart.js") {
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
          </TabList>
        </Box>
        <TabPanel value="1">
          <LineChart />
        </TabPanel>
        <TabPanel value="2">
          <BarChart />
        </TabPanel>
        <TabPanel value="3">
          <PieChart />
        </TabPanel>
        <TabPanel value="4">
          <LineReal />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
