import React, { createContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { Home } from "./Home";
import { StatusBar } from './Progress';
import { NavDrawer } from './NavDrawer';
import { About } from './About';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Education } from './Education';
import { Languages } from './Languages';
import { Experience } from './Experience';

interface AppBarContext {
  navItems: string[];
  handleDrawerToggle: () => void;
};

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact', 'Skills', 'Education', 'Languages'];
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
      <CssBaseline />
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
            {/* <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
            >
              Eric Hernandez
            </Typography> */}
            <Box display="flex"
              justifyContent="flex-end"
              alignItems="flex-end" 
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff'}} href={`#${item}`}>
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
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <AppBarCtx.Provider value={context}>
              <NavDrawer />
            </AppBarCtx.Provider>
          </Drawer>
        </Box>
        <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: "center", justifyContent: "center"}}>
          <Box id="Home" alignItems="center" justifyContent="center" sx={{backgroundColor: "white", width: "100%"}}>
            <Toolbar />
            <Home />
          </Box>
          <Container maxWidth="lg">
            <Grid container sx={{py: 2, ml:2}}>
              <Grid item  xs={12} md={8} sx={{py: 2}}>
                <Grid container spacing={4} xs={12}>
                  <Grid id="About" item xs={12}>
                    <About />
                  </Grid>
                  <Grid id="Projects" item xs={12}>
                    <Projects />
                  </Grid>
                  <Grid id="Experience" item xs={12}>
                    <Experience />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4} sx={{py: 2}}>
                <Grid container justifyContent="center" spacing={4} xs={12}>
                  <Grid id="Contact" item xs={12}>
                    <Contact />
                  </Grid>
                  <Grid id="Skills" item xs={12}>
                    <Skills />
                  </Grid>
                  <Grid id="Education" item xs={12}>
                    <Education />
                  </Grid>
                  <Grid id="Languages" item xs={12}>
                    <Languages />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Box>
    </ThemeProvider>
  );
}