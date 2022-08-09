import React, { createContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { Home } from "./Home";
import { StatusBar } from './Progress';
import { NavDrawer } from './NavDrawer';

interface AppBarContext {
  navItems: string[];
  handleDrawerToggle: () => void;
};

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Skills', 'Contact'];
export const AppBarCtx = createContext<AppBarContext | null>(null);

export const NavBar = () => { 
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const context: AppBarContext = {
    navItems: navItems,
    handleDrawerToggle: handleDrawerToggle
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }} alignItems="center" justifyContent="center">
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
            >
              Eric Hernandez
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff'}}>
                  {item}
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
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <AppBarCtx.Provider value={context}>
              <NavDrawer />
            </AppBarCtx.Provider>
          </Drawer>
        </Box>
        <Box alignItems="center" justifyContent="center">
          <Toolbar />
          <Home />
        </Box>
      </Box>
    </ThemeProvider>
  );
}