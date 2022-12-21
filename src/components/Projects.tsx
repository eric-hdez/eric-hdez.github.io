import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import GamepadIcon from '@mui/icons-material/Gamepad';
import Grid from '@mui/material/Grid';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyIcon from '@mui/icons-material/Key';
import LanguageIcon from '@mui/icons-material/Language';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const projects = [
  {
    name: 'Personal Website',
    title: 'This website you are currently on!',
    icon: <LanguageIcon fontSize="large" color="secondary" />,
    link: 'https://www.github.com/eric-hdez/eric-hdez.github.io',
    directive: 'Check it out',
    disabled: false,
    target: '_blank',
  },
  {
    name: 'Snake Game',
    title: 'A simple snake game built with Python and Pygame.',
    icon: <GamepadIcon fontSize="large" color="secondary" />,
    link: 'https://www.github.com/eric-hdez/snake-game',
    directive: 'Check it out',
    disabled: false,
    target: '_blank',
  },
  {
    name: 'Schmidt-Samoa Cryptosystem',
    title: 'A simple implementation of the Schmidt-Samoa Cryptosystem.',
    icon: <KeyIcon fontSize="large" color="secondary" />,
    link: 'https://www.github.com/eric-hdez/schmidt-samoa-cryptosystem',
    directive: 'Check it out',
    disabled: false,
    target: '_blank',
  },
];

export const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2} sx={{ pt: 2 }}>
        {projects.map(
          ({ name, title, icon, link, directive, disabled, target }) => (
            <Grid item xs={12} sm={6}>
              <Paper
                square
                elevation={3}
                sx={{ backgroundColor: '#EEEEEE', pt: 20, px: 4, pb: 4 }}
              >
                {icon}
                <Typography variant="h6" component="h1" noWrap>
                  {name}
                </Typography>
                <Button
                  size="medium"
                  color="secondary"
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                  href={link}
                  title={title}
                  target={target}
                  rel="noopener noreferrer"
                  sx={{ px: 0 }}
                  disabled={disabled}
                >
                  {directive}
                </Button>
              </Paper>
            </Grid>
          ),
        )}
      </Grid>
    </Container>
  );
};
