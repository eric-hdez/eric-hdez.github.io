import React, { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { NavDrawer } from './NavDrawer';
import { StatusBar } from './Progress';

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

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      `#${event.currentTarget.innerText}`,
    );

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
              align: { xs: 'center' },
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
      <NavDrawer
        navItems={navItems}
        toggleDrawer={handleDrawerToggle}
        drawerClick={handleClick}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
};
