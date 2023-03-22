import React from 'react';
import { Link, List, ListItem, ListItemDecorator, Stack, Typography } from '@mui/joy';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';

const contactInfo = [
  {
    contact: 'Santa Cruz, CA',
    icon: <LocationCityRoundedIcon />,
  },
  {
    contact: (
      <Link
        href="mailto:eherna97@ucsc.edu"
        target="_blank"
        rel="noopener noreferrer"
        title="Eric's Email"
      >
        eherna97@ucsc.edu
      </Link>
    ),
    icon: <EmailRoundedIcon />,
  },
  {
    contact: (
      <Link href="https://eric-hdez.github.io/" title="Eric's Personal Website">
        eric-hdez.github.io
      </Link>
    ),
    icon: <WebRoundedIcon />,
  },
];

export const Contact = () => {
  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h5" gutterBottom>
        Contact Me
      </Typography>
      <List sx={{ p: 0 }}>
        {contactInfo.map(({ contact, icon }) => (
          <ListItem sx={{ p: 0 }}>
            <ListItemDecorator>{icon}</ListItemDecorator>
            <Typography>{contact}</Typography>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
