import { useState } from "react";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PieChartIcon from "@mui/icons-material/PieChart";

import PieVictory from "../Pie/PieVictory";
import BarVictory from "../Bar/BarVictory";
import LineVictory from "../Line/LineVictory";

import { useSelector } from "react-redux";

export default function AllVictory() {
  const select = useSelector((state) => state.dropdown.selected);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (select !== "Victory") {
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
          <LineVictory />
        </TabPanel>
        <TabPanel value="2">
          <BarVictory />
        </TabPanel>
        <TabPanel value="3">
          <PieVictory />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
