import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { AppBarCtx } from "./NavBar";

export const NavDrawer = () => {
  const ctx = useContext(AppBarCtx);
  
  return (
    <Box onClick={ctx?.handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Verdana"}}>
        Eric Hernandez
      </Typography>
      <Divider />
      <List>
        {ctx?.navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton href={`#${item}`} title={item} sx={{ textAlign: 'center', fontFamily: "Verdana"}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
};
