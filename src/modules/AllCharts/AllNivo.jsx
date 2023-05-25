import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";

import LineNivo from "../Line/LineNivo";
import BarNivo from "../Bar/BarNivo";

import { useSelector } from "react-redux";

export default function AllNivo() {
  const select = useSelector((state) => state.dropdown.selected);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (select !== "Nivo") {
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
          <LineNivo />
        </TabPanel>
        <TabPanel value="2">
          <BarNivo />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
