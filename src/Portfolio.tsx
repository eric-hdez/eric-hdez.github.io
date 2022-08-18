import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { theme } from './components/Theme';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { Experience } from './components/Experience';
import { StickyFooter } from './components/Footer';
import { NavBar } from './components/Nav';

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
        behavior: 'smooth',
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

export const Portfolio = () => {
  const [snackOpen, setSnackOpen] = useState<boolean>(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box sx={{ display: 'flex' }} alignItems="center" justifyContent="center">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Toolbar id="Home" sx={{ backgroundColor: 'primary' }} />
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 4, width: '100%' }}
          >
            <Home />
          </Box>
          <Container maxWidth="lg">
            <Grid container sx={{ py: 2, ml: 2 }}>
              <Grid item xs={13} md={8} sx={{ py: 2 }}>
                <Grid container spacing={4} xs={12}>
                  <Grid id="About" item xs={12} sx={{ scrollMarginTop: 45 }}>
                    <About />
                  </Grid>
                  <Grid id="Projects" item xs={12} sx={{ scrollMarginTop: 45 }}>
                    <Projects />
                  </Grid>
                  <Grid
                    id="Experience"
                    item
                    xs={12}
                    sx={{ scrollMarginTop: 45 }}
                  >
                    <Experience />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={13} md={4} sx={{ py: 2 }}>
                <Grid container justifyContent="center" spacing={4} xs={12}>
                  <Grid id="Contact" item xs={12} sx={{ scrollMarginTop: 45 }}>
                    <Contact />
                  </Grid>
                  <Grid id="Skills" item xs={12} sx={{ scrollMarginTop: 45 }}>
                    <Skills />
                  </Grid>
                  <Grid
                    id="Education"
                    item
                    xs={12}
                    sx={{ scrollMarginTop: 45 }}
                  >
                    <Education />
                  </Grid>
                  <Grid
                    id="Languages"
                    item
                    xs={12}
                    sx={{ scrollMarginTop: 45 }}
                  >
                    <Languages />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <StickyFooter />
        </div>
      </Box>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Snackbar open={snackOpen} autoHideDuration={9000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          elevation={6}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          I built this page from scratch using React, Material-UI, and
          TypeScript. :)
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
};
