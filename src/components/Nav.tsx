import React, { MouseEvent } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  Stack,
  IconButton,
  Typography,
  Box,
  Button,
} from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import ModeToggle from './ModeToggle';

interface NavBarProps {
  height: string | number | undefined;
  toggleSidebar: () => void;
}

export interface NavDrawerProps {
  toggleSidebar: () => void;
}

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

const navClick = (event: MouseEvent<HTMLElement>) => {
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

// height is 64 for mui appbar

export const NavBar = ({ height, toggleSidebar }: NavBarProps) => {
  return (
    <Stack height={height} direction="row" alignItems="center" gap={3} px={3}>
      <IconButton
        variant="plain"
        aria-label="open-drawer"
        onClick={toggleSidebar}
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography level="h5">Eric Hernandez</Typography>
      <Box display="flex" flexGrow={1} justifyContent="flex-end">
        <Box display={{ xs: 'none', md: 'flex' }}>
          {navItems.map(item => (
            <Button
              variant="plain"
              size="sm"
              onClick={navClick}
              sx={{
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <Typography
                level="body1"
                fontSize="sm"
                sx={{
                  '&:hover': {
                    color: 'var(--joy-palette-primary-plainColor)',
                  },
                }}
              >
                {item}
              </Typography>
            </Button>
          ))}
        </Box>
        <ModeToggle />
      </Box>
    </Stack>
  );
};

export const NavDrawer = ({ toggleSidebar }: NavDrawerProps) => {
  const drawerClick = (event: MouseEvent<HTMLElement>) => {
    navClick(event);
    toggleSidebar();
  };

  return (
    <List>
      {navItems.map(item => (
        <ListItem key={item}>
          <ListItemButton
            onClick={drawerClick}
            sx={{ display: 'flex', justifyContent: 'center', p: 2 }}
          >
            {item}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
