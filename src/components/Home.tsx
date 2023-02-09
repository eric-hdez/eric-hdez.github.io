import React from 'react';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';

import eric from '../img/eric_headshot.jpg';

const buttons = [
  {
    link: 'https://www.linkedin.com/in/ericherna19/',
    description: "Eric's LinkedIn Profile",
    icon: <LinkedInIcon />,
  },
  {
    link: 'https://github.com/eric-hdez',
    description: "Eric's GitHub Profile",
    icon: <GitHubIcon />,
  },
];

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#eeeeee' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={7} lg={8} order={{ xs: 2, md: 2 }} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ marginBottom: '16px' }} textAlign="left">
              Hi There!
              <br />
              I&apos;m Eric Hernandez.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ marginBottom: '16px' }}>
              I&apos;m a 4th year Computer Science student at the University of California, Santa
              Cruz.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {buttons.map(({ link, description, icon }, index) => (
              <IconButton
                edge={index === 0 ? 'start' : undefined}
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                title={description}
                aria-label={description}
              >
                {icon}
              </IconButton>
            ))}
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={5}
          lg={4}
          order={{ xs: 1, md: 1 }}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar src={eric} variant="rounded" sx={{ height: '262px', width: '350px' }} />
        </Grid>
      </Grid>
    </Container>
  );
};
