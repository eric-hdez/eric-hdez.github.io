import * as React from 'react';
import { CssBaseline, Button, Link, Stack, Typography, Box } from '@mui/joy';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Copyright = () => {
  return (
    <Typography level="body-md">
      {'Copyright © '}
      <Link href="https://www.eric-hdez.dev">Eric Hernandez</Link> {new Date().getFullYear()}
      {'.'}
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
      <Box>
        <Typography level="title-md" color="warning">
          This Website is Still Being Touched Up :D
        </Typography>
      </Box>
    </Stack>
  );
};
