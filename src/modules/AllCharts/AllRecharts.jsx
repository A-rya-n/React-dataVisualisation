import { useState } from "react";
import { Box, Tab } from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";

import LineRechart from "../Line/LineRechart";
import BarRechart from "../Bar/BarRechart";

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
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Line Charts" value="1" />
            <Tab label="Bar Charts" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <LineRechart />
        </TabPanel>
        <TabPanel value="2">
          <BarRechart />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
