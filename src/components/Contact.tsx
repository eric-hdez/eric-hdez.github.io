import React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import WebIcon from '@mui/icons-material/Web';

const contactInfo = [
  {
    contact: 'Santa Cruz, CA',
    icon: <LocationCityIcon />,
  },
  {
    contact: (
      <Link
        href="mailto:eherna97@ucsc.edu"
        target="_blank"
        rel="noopener noreferrer"
        color="secondary"
        underline="hover"
        title="Eric's Email"
      >
        eherna97@ucsc.edu
      </Link>
    ),
    icon: <MailOutlineIcon />,
  },
  {
    contact: (
      <Link
        href="https://eric-hdez.github.io/"
        color="secondary"
        underline="hover"
        title="Eric's Personal Website"
      >
        eric-hdez.github.io
      </Link>
    ),
    icon: <WebIcon />,
  },
];

export const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <List disablePadding sx={{ pt: 2 }}>
        {contactInfo.map(({ contact, icon }) => (
          <ListItem disablePadding>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={contact} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
