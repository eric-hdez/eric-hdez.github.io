import * as React from 'react';
import { CssBaseline, IconButton, Link, Stack, Typography } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Copyright = () => {
  return (
    <Typography level="body2">
      {'Copyright © '}
      <Link href="https://eric-hdez.github.io">Eric Hernandez</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const buttons = [
  {
    link: 'mailto:eherna97@ucsc.edu',
    description: 'Eric\'s Email Address',
    icon: <EmailRoundedIcon />,
  },
  {
    link: 'https://www.linkedin.com/in/ericherna19/',
    description: 'Eric\'s LinkedIn Profile',
    icon: <LinkedInIcon />,
  },
  {
    link: 'https://github.com/eric-hdez',
    description: 'Eric\'s GitHub Profile',
    icon: <GitHubIcon />,
  },
];

export const StickyFooter = () => {
  return (
    <Stack direction="column" alignItems="center" p={4} spacing={1}>
      <CssBaseline />
      <Stack direction="row" spacing={1}>
        {buttons.map(({ link, description, icon }) => (
          <IconButton
            component={Link}
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            title={description}
            aria-label={description}
          >
            {icon}
          </IconButton>
        ))}
      </Stack>
      <Copyright />
    </Stack>
  );
};
