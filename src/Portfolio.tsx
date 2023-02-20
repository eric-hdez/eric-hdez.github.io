import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
// import Grid from '@mui/material/Grid';
import { Grid } from '@mui/joy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Home } from './components/Home';
import { Languages } from './components/Languages';
import { NavBar } from './components/Nav';
import { Projects } from './components/Projects';
import { ScrollTop } from './components/ScrollTop';
import { Skills } from './components/Skills';
import { StickyFooter } from './components/Footer';
import { theme } from './components/Theme';
import { Stack } from '@mui/joy';

export const Portfolio = () => {
  const [snackOpen, setSnackOpen] = useState<boolean>(true);

  const closeSnackBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <NavBar />
      <Toolbar />
      <Box mt={4}>
        <Home />
      </Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Stack direction="column" spacing={4}>
              <About />
              <Projects />
              <Experience />
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack direction="column" spacing={4}>
              <Contact />
              <Skills />
              <Education />
              <Languages />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box mt={4}>
        <StickyFooter />
      </Box>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Snackbar open={snackOpen} autoHideDuration={10000} onClose={closeSnackBar}>
        <MuiAlert
          onClose={closeSnackBar}
          elevation={6}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          I built this page from scratch using React, Material-UI, and TypeScript. :)
        </MuiAlert>
      </Snackbar>
    </>
  );
  {
    /* <Box sx={{ display: 'flex' }} alignItems="center" justifyContent="center">
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
          <Box alignItems="center" justifyContent="center" sx={{ mt: 4, width: '100%' }}>
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
                  <Grid id="Experience" item xs={12} sx={{ scrollMarginTop: 45 }}>
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
                  <Grid id="Education" item xs={12} sx={{ scrollMarginTop: 45 }}>
                    <Education />
                  </Grid>
                  <Grid id="Languages" item xs={12} sx={{ scrollMarginTop: 45 }}>
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
      <Snackbar open={snackOpen} autoHideDuration={10000} onClose={closeSnackBar}>
        <MuiAlert
          onClose={closeSnackBar}
          elevation={6}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          I built this page from scratch using React, Material-UI, and TypeScript. :)
        </MuiAlert>
      </Snackbar> */
  }
  {
    /* </ThemeProvider> */
  }
};
