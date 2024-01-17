import React, { useState, MouseEvent } from 'react';
import { Box, Container, CssBaseline, Stack } from '@mui/joy';
import { About } from './components/About';
import { Home } from './components/Home';
import { NavBar, NavDrawer } from './components/Nav';
import { Resume } from './components/Resume';
import { StickyFooter } from './components/Footer';
import theme from './components/Theme';

import { CssVarsProvider } from '@mui/joy/styles';
import { GlobalStyles } from '@mui/joy';

const navBarHeight = '140px';

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

const views = new Map<string, React.JSX.Element>([
  ['HOME', <Home />],
  ['ABOUT', <About />],
  ['RÉSUMÉ', <Resume />],
]);

export const Portfolio = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currView, setCurrView] = useState('HOME');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleCurrView = (event: MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.innerText);
    setCurrView(event.currentTarget.innerText);
  };

  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <GlobalStyles styles={{ body: { overflow: 'hidden' } }} />
      <CssBaseline />
      <Box width="100%" position="fixed" top={0} zIndex={3} bgcolor="background.body">
        <NavBar
          height={navBarHeight}
          toggleSidebar={toggleSidebar}
          currView={currView}
          toggleCurrView={toggleCurrView}
        />
      </Box>
      <Box id="Home" height={navBarHeight} />
      <Stack direction="row" width="100%" height="100%">
        <Box
          display={{ xs: sidebarOpen ? 'flex' : 'none', md: 'none' }}
          position="fixed"
          height="max-content"
          width="inherit"
          zIndex={2}
          bgcolor="background.body"
          justifyContent="center"
          borderBottom={2}
        >
          <NavDrawer
            toggleSidebar={toggleSidebar}
            currView={currView}
            toggleCurrView={toggleCurrView}
          />
        </Box>
        {sidebarOpen && <BackDrop onClick={toggleSidebar} />}
        <Container maxWidth="lg">
          <Box border={2}>{views.get(currView)}</Box>
          <Box>
            <StickyFooter />
          </Box>
        </Container>
      </Stack>
    </CssVarsProvider>
  );
};
