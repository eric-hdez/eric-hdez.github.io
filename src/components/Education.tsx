import React from 'react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';

const schools = [
  {
    name: 'University of California, Santa Cruz (2019 - present)',
    degree: 'B.S. in Computer Science',
  },
  {
    name: 'Paramount High School (2015 - 2019)',
    degree: 'High School Diploma',
  },
];

export const Education = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Education
      </Typography>
      <List disablePadding sx={{ pt: 2 }}>
        {schools.map(({ degree, name }) => (
          <ListItem disablePadding>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={degree} secondary={name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
