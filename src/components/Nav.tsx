import React, { MouseEvent } from 'react';
import { ColorPaletteProp, Stack, IconButton, Box, Button } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import ModeToggle from './ModeToggle';

interface NavBarProps {
  height: string | number | undefined;
  toggleSidebar: () => void;
  currView: string | undefined;
  toggleCurrView: (e: MouseEvent<HTMLElement>) => void;
}

export interface NavDrawerProps {
  toggleSidebar: () => void;
  currView: string | undefined;
  toggleCurrView: (e: MouseEvent<HTMLElement>) => void;
}

const navItems = [
  { title: 'HOME', color: 'primary' },
  { title: 'ABOUT', color: 'danger' },
  { title: 'RÉSUMÉ', color: 'success' },
];

export const NavBar = ({ height, toggleSidebar, currView, toggleCurrView }: NavBarProps) => {
  return (
    <Stack direction="row" height={height} alignItems="center" gap={2} px={3}>
      <Box zIndex={2} display={{ md: 'none' }} position="absolute" top={48} left={32}>
        <IconButton variant="outlined" aria-label="open-drawer" onClick={toggleSidebar} size="lg">
          <MenuIcon />
        </IconButton>
      </Box>
      <Box display="flex" flexGrow={1} justifyContent="center">
        <Box display="flex" flexGrow={1} justifyContent="space-evenly">
          {navItems.map(({ title, color }) => (
            <Button
              variant="outlined"
              size="lg"
              color={color as ColorPaletteProp}
              sx={{
                display: { xs: currView === title ? 'flex' : 'none', md: 'flex' },
                bgcolor:
                  currView === title
                    ? `var(--joy-palette-${color}-outlinedHoverBg)`
                    : 'transparent',
              }}
              onClick={toggleCurrView}
            >
              {title}
            </Button>
          ))}
        </Box>
        <Box zIndex={2} position="absolute" top={48} right={32}>
          <ModeToggle />
        </Box>
      </Box>
    </Stack>
  );
};

export const NavDrawer = ({ toggleSidebar, currView, toggleCurrView }: NavDrawerProps) => {
  const drawerClick = (event: MouseEvent<HTMLElement>) => {
    toggleCurrView(event);
    toggleSidebar();
  };

  return (
    <Stack direction="column" p={1.25} spacing={2}>
      {navItems.map(({ title, color }) => (
        <Button
          variant="outlined"
          size="lg"
          color={color as ColorPaletteProp}
          onClick={drawerClick}
        >
          {title}
        </Button>
      ))}
    </Stack>
  );
};
