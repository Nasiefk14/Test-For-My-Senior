import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonShowcase from "../pages/ButtonShowcase";
import { ITabPanelProps } from "../types/interfaces/interfaces";
import DebounceShowcase from "../pages/DebounceShowcase";
import { StoreProvider } from "easy-peasy";
import store from "../store";
import CocktailListShowcase from "../pages/CocktailListShowcase";

function TabPanel({ children, value, index, ...other }: ITabPanelProps) {
  const hidden = value !== index;

  return (
    <div
      role="tabpanel"
      hidden={hidden}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {hidden ? null : (
        <Box className="p-4">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="w-full">
      <Box className="border-b-2 border-gray-300">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Task One" {...a11yProps(0)} />
          <Tab label="Task Two" {...a11yProps(1)} />
          <Tab label="Task Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ButtonShowcase />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StoreProvider store={store}>
          <DebounceShowcase />
        </StoreProvider>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CocktailListShowcase />
      </TabPanel>
    </Box>
  );
}
