import React from 'react';
import { Avatar, Grid, IconButton, Link, Stack, Typography } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import eric from '../img/eric_pfp.jpg';

const buttons = [
  {
    link: 'https://www.linkedin.com/in/eric-hdez',
    description: 'Eric\'s LinkedIn Profile',
    icon: <LinkedInIcon />,
  },
  {
    link: 'https://github.com/eric-hdez',
    description: 'Eric\'s GitHub Profile',
    icon: <GitHubIcon />,
  },
];

export const Home = () => {
  return (
    <Grid container m={0} py={4} spacing={4} alignItems="center" justifyContent="center">
      <Grid container xs={12} md={5} lg={4} justifyContent="center">
        <Avatar
          src={eric}
          sx={{
            height: '262px',
            maxWidth: `calc(100% - 32px)`,
            width: { xs: '350px', sm: '360px' },
            borderRadius: 'var(--joy-radius-sm)',
          }}
        />
      </Grid>
      <Grid xs={12} md={7} lg={8}>
        <Stack direction="column" gap={4}>
          <Typography level="h3" textAlign="left">
            Hi There!
            <br />
            I&apos;m Eric Hernandez.
          </Typography>
          <Typography level="body-lg">
            I&apos;m a new graduate with a Bachelor of Science in Computer Science from the
            University of California, Santa Cruz.
          </Typography>
          <Stack direction="row" spacing={1}>
            {buttons.map(({ link, description, icon }) => (
              <IconButton
                component={Link}
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                title={description}
                aria-label={description}
                color="primary"
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
