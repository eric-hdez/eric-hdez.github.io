import React from 'react';
import { ColorPaletteProp, Grid, IconButton, Link, Stack, Typography } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import eric from '../img/pfp.jpg';

const buttons = [
  {
    link: 'https://www.linkedin.com/in/eric-hdez',
    description: 'Eric\'s LinkedIn Profile',
    icon: <LinkedInIcon />,
    color_: 'primary',
  },
  {
    link: 'https://www.github.com/eric-hdez',
    description: 'Eric\'s GitHub Profile',
    icon: <GitHubIcon />,
    color_: 'danger',
  },
  {
    link: 'https://www.instagram.com/eric_witha_c',
    description: 'Eric\'s Instagram Profile',
    icon: <InstagramIcon />,
    color_: 'success',
  },
  {
    link: 'https://www.twitter.com/eric_witha__c',
    description: 'Eric\'s X Profile',
    icon: <TwitterIcon />,
    color_: 'warning',
  },
];

export const Home = () => {
  return (
    <Grid container m={0} p={2} justifyContent="center">
      <Grid container p={2} xs={12} md={7} lg={8}>
        <Stack direction="column" justifyContent="space-between" spacing={8}>
          <Stack direction="column" spacing={1}>
            <Typography level="h1" textAlign="left">
              Eric Hernandez
            </Typography>
            <Typography level="body-lg">
              I&apos;m an incoming Software Engineer at Bloomberg LP with a B.S. in Computer Science
              from the University of California, Santa Cruz.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            {buttons.map(({ link, description, icon, color_ }) => (
              <IconButton
                component={Link}
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                title={description}
                aria-label={description}
                color={color_ as ColorPaletteProp}
                variant="outlined"
                size="lg"
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid container xs={12} md={5} lg={4} justifyContent="center">
        <img src={eric} height="100%" width="100%" loading="lazy" />
      </Grid>
    </Grid>
  );
};
