import * as React from 'react';
import { CssBaseline, Button, Link, Stack, Typography, Box } from '@mui/joy';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Copyright = () => {
  return (
    <Typography level="body-md" textAlign="center">
      {`Copyright © ${new Date().getFullYear()} Eric Hernandez. All rights reserved.`}
    </Typography>
  );
};

const buttons = [
  {
    link: 'mailto:eric-hdez@proton.me',
    description: 'Eric\'s Email Address',
    icon: <EmailRoundedIcon />,
  },
];

export const StickyFooter = () => {
  return (
    <Stack direction="column" alignItems="center" p={4} spacing={1}>
      <CssBaseline />
      <Stack direction="row" spacing={1}>
        {buttons.map(({ link, description, icon }) => (
          <Button
            startDecorator={icon}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            title={description}
            aria-label={description}
            size="lg"
            variant="outlined"
          >
            eric-hdez@proton.me
          </Button>
        ))}
      </Stack>
      <Copyright />
    </Stack>
  );
};
