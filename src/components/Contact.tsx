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

export const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{ pb: 1 }}>
        Contact Me
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary="Santa Cruz, CA" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText
            primary={
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
            }
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <WebIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                href="https://eric-hdez.github.io/"
                color="secondary"
                underline="hover"
                title="Eric's Personal Website"
              >
                eric-hdez.github.io
              </Link>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
};
