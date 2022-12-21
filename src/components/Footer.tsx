import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Eric Hernandez
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const buttons = [
  {
    link: 'mailto:eherna97@ucsc.edu',
    description: "Eric's Email Address",
    icon: <MailOutlineIcon />,
  },
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

export const StickyFooter = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 4, backgroundColor: '#eeeeee' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
            {buttons.map(({ link, description, icon }) => (
              <IconButton
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                title={description}
                aria-label={description}
              >
                {icon}
              </IconButton>
            ))}
            <Copyright />
          </Container>
        </Box>
      </Box>
    </Container>
  );
};
