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
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';
import { StickyFooter } from './components/Footer';
import theme from './components/Theme';

import { CssVarsProvider } from '@mui/joy/styles';
import { GlobalStyles } from '@mui/joy';

const containerStyle = {
  bgcolor: 'var(--joy-palette-primary-softHoverBg)',
  borderRadius: 'var(--joy-radius-md)',
};
const boxStyle = {
  ...containerStyle,
  minWidth: '100%',
};

const navBarHeight = '70px';
// const navDrawerWidth = '240px';

const BackDrop = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box
      display={{ md: 'none' }}
      position="fixed"
      height="100%"
      width="100%"
      zIndex={1}
      bgcolor="#00000055"
      onClick={onClick}
    />
  );
};

export const Portfolio = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <GlobalStyles styles={{ body: { overflow: 'hidden' } }} />
      <Box width="100%" position="fixed" top={0} zIndex={3} bgcolor="background.body">
        <NavBar height={navBarHeight} toggleSidebar={toggleSidebar} />
        <Divider />
      </Box>
      <Box id="Home" height={navBarHeight} />
      <Stack direction="row" width="100%" height="100%">
        <Box
          display={{ xs: sidebarOpen ? 'flex' : 'none' }}
          position="fixed"
          height="max-content"
          width="inherit"
          zIndex={2}
          bgcolor="background.body"
        >
          <NavDrawer toggleSidebar={toggleSidebar} />
        </Box>
        {sidebarOpen && <BackDrop onClick={toggleSidebar} />}
        <Box width="inherit" height="inherit">
          <Stack direction="column" width="inherit" py={4} spacing={4} alignItems="center">
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
                      <Box id={`${entry[0]}`} sx={{ ...boxStyle, scrollMarginTop: 85 }}>
                        {entry[1]}
                      </Box>
                    ))}
                  </Stack>
                </Grid>
                <Grid xs={12} md={4}>
                  <Stack direction="column" spacing={4} alignItems="center">
                    {Object.entries({
                      Contact: <Contact />,
                      Resume: <Resume />,
                      Skills: <Skills />,
                      Education: <Education />,
                      Languages: <Languages />,
                    }).map(entry => (
                      <Box id={`${entry[0]}`} sx={{ ...boxStyle, scrollMarginTop: 85 }}>
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
    </CssVarsProvider>
  );
};
