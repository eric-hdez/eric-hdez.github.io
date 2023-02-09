import React, { MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export interface NavDrawerProps {
  navItems: Array<string>;
  toggleDrawer: () => void;
  drawerClick: (event: MouseEvent<HTMLElement>) => void;
  mobileOpen: boolean;
}

export const NavDrawer = ({ navItems, toggleDrawer, drawerClick, mobileOpen }: NavDrawerProps) => {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: '#252525',
          },
        }}
      >
        <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
          <Typography color="#eeeeee" variant="h6" sx={{ my: 2 }}>
            Eric Hernandez
          </Typography>
          <Divider sx={{ backgroundColor: '#EEEEEE' }} />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={drawerClick}
                  title={item}
                  sx={{ color: '#EEEEEE', textAlign: 'center' }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
