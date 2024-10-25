import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import { ERoutes2D, Routes2DRefs, Routes2DIcons } from "../../../RouterConfig";
import SwitchEnvironment from "./SwitchEnvironment";

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <List>
        {(Object.values(ERoutes2D) as Array<ERoutes2D>).map((value, index) => {
          const ItemIcon = Routes2DIcons[value];
          return (
            <div
              key={index}
              onClick={(_event) => {
                toggleDrawer(false);
                Routes2DRefs[value].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "1.5em 1em" }}>
                  <ListItemIcon>
                    <ItemIcon />
                  </ListItemIcon>
                  {value}
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          );
        })}
        <div className="flex w-full justify-center py-6">
          <SwitchEnvironment />
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={() => toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
