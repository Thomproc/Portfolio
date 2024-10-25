import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Menu } from "@mui/icons-material";
import { ERoutes2D, Routes2DRefs, Routes2DIcons } from "../../../RouterConfig";
import { IconButton } from "@mui/material";

export default function MobileNavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        {(Object.values(ERoutes2D) as Array<ERoutes2D>).map((value, index) => {
          const LeftIcon = Routes2DIcons[value];
          return (
            <div
              key={index}
              onClick={(_event) => {
                Routes2DRefs[value].current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LeftIcon />
                  </ListItemIcon>
                  {/* <ListItemText primary={value} /> */}
                  {value}
                </ListItemButton>
              </ListItem>
            </div>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
