import React, { createContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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
import StickyFooter from './Footer';

interface AppBarContext {
  navItems: string[];
  handleDrawerToggle: () => void;
};

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact', 'Skills', 'Education', 'Languages'];
export const AppBarCtx = createContext<AppBarContext | null>(null);

interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#Home');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export const NavBar = () => { 
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [snackOpen, setSnackOpen] = useState<boolean>(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setSnackOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block', color: '#eeeeee' }}}
            >
              Eric Hernandez
            </Typography>
            <Box display="flex"
              justifyContent="flex-end"
              alignItems="flex-end" 
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#eeeeee'}} href={`#${item}`} title={item}>
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
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#252525' },
            }}
          >
            <AppBarCtx.Provider value={context}>
              <NavDrawer />
            </AppBarCtx.Provider>
          </Drawer>
        </Box>
        {/* <Grid container direction="column"> */}
          {/* <Toolbar id="Home" sx={{backgroundColor: "black"}}/> */}
        <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: "center", justifyContent: "center"}}>
          <Toolbar id="Home" sx={{backgroundColor: "primary"}}/>
          <Box alignItems="center" justifyContent="center" sx={{mt: 4, width: "100%"}}>
            {/* <Toolbar /> */}
            <Home />
          </Box>
          <Container maxWidth="lg">
            <Grid container sx={{py: 2, ml:2}}>
              <Grid item  xs={13} md={8} sx={{py: 2}}>
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
              <Grid item xs={13} md={4} sx={{py: 2}}>
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
          <StickyFooter />
        </div>
        {/* </Grid> */}
      </Box>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Snackbar open={snackOpen} autoHideDuration={9000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} elevation={6} severity="info" variant="filled" sx={{ width: '100%' }}>
          I built this page from scratch using <br/> React, Material-UI, and TypeScript.
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
}
