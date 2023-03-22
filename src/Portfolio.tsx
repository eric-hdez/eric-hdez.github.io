import React, { useState } from 'react';
import { Box, Container, Divider, Grid, Stack } from '@mui/joy';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Home } from './components/Home';
import { Languages } from './components/Languages';
import { NavBar, NavDrawer } from './components/Nav';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { StickyFooter } from './components/Footer';
import theme from './components/Theme';

import { CssVarsProvider } from '@mui/joy/styles';
import { CssBaseline, GlobalStyles } from '@mui/joy';

const containerStyle = {
  bgcolor: 'var(--joy-palette-primary-softHoverBg)',
  borderRadius: 'var(--joy-radius-md)',
};

const boxStyle = {
  ...containerStyle,
  minWidth: '100%',
};

const navBarHeight = '70px';
const navDrawerWidth = '240px';

export const Portfolio = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <GlobalStyles styles={{ body: { overflow: 'hidden' } }} />
      {/* <CssBaseline /> */}
      {/* <Box height={navBarHeight} /> */}
      <Box width="100%" position="fixed" top={0} zIndex={3} bgcolor="background.body">
        <NavBar height={navBarHeight} toggleSidebar={toggleSidebar} />
        <Divider />
      </Box>
      <Stack direction="column" overflow="hidden">
        <Box height={navBarHeight} />
        <Stack direction="row" height="100%">
          <Box height={`calc(100vh - ${navBarHeight})`} width="100%" overflow="scroll">
            <Box
              display={{ xs: sidebarOpen ? 'flex' : 'none' }}
              height="100%"
              width={navDrawerWidth}
              position="fixed"
              bgcolor="background.body"
              zIndex={2}
            >
              <NavDrawer toggleSidebar={toggleSidebar} />
            </Box>
            {sidebarOpen && (
              <Box
                display={{ md: 'none' }}
                height="100%"
                width="100%"
                zIndex={1}
                bgcolor="#00000055"
                position="fixed"
                onClick={toggleSidebar}
              />
            )}
            <Stack id="Home" direction="column" width="100%" py={4} spacing={4} alignItems="center">
              <Container maxWidth="lg" sx={{ ...containerStyle }}>
                <Home />
              </Container>
              <Container maxWidth="lg">
                <Grid container spacing={4}>
                  <Grid xs={12} md={8}>
                    <Stack direction="column" spacing={4} alignItems="center">
                      {Object.entries({
                        About: <About />,
                        Experience: <Experience />,
                        Projects: <Projects />,
                      }).map(entry => (
                        <Box id={`${entry[0]}`} {...boxStyle} sx={{ scrollMarginTop: 20 }}>
                          {entry[1]}
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid xs={12} md={4}>
                    <Stack direction="column" spacing={4} alignItems="center">
                      {Object.entries({
                        Contact: <Contact />,
                        Skills: <Skills />,
                        Education: <Education />,
                        Languages: <Languages />,
                      }).map(entry => (
                        <Box id={`${entry[0]}`} {...boxStyle} sx={{ scrollMarginTop: 20 }}>
                          {entry[1]}
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Container>
              <Container maxWidth="lg" sx={{ ...containerStyle }}>
                <StickyFooter />
              </Container>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </CssVarsProvider>
  );
};
