import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:eherna97@ucsc.edu"
              title="Eric's Email Address"
              aria-label="Eric's Email Address"
            >
              <MailOutlineIcon />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ericherna19/"
              title="Eric's LinkedIn Profile"
              aria-label="Eric's LinkedIn Profile"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eric-hdez"
              title="Eric's Github Profile"
              aria-label="Eric's Github Profile"
            >
              <GitHubIcon />
            </IconButton>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </Container>
  );
};
