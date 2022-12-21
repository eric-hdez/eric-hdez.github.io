import React, { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { StatusBar } from './Progress';

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navItems = [
    'Home',
    'About',
    'Projects',
    'Experience',
    'Contact',
    'Skills',
    'Education',
    'Languages',
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(`#${event.currentTarget.innerText}`);

    console.log(event.currentTarget.innerText);
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box sx={{ display: 'flex' }} alignItems="center" justifyContent="center">
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'block', sm: 'block', color: '#eeeeee' },
            }}
          >
            Eric Hernandez
          </Typography>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ textTransform: 'none', color: '#eeeeee' }}
                onClick={handleClick}
                title={item}
              >
                <Typography variant="body1">{item}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
        <StatusBar />
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography color="#eeeeee" variant="h6" sx={{ my: 2 }}>
              Eric Hernandez
            </Typography>
            <Divider sx={{ backgroundColor: '#eeeeee' }} />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton
                    onClick={handleClick}
                    title={item}
                    sx={{ color: '#eeeeee', textAlign: 'center' }}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};
