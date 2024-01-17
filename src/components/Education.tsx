import React from 'react';
import { List, ListItem, ListItemContent, ListItemDecorator, Stack, Typography } from '@mui/joy';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

const schools = [
  {
    name: 'University of California, Santa Cruz (2019 - 2023)',
    degree: 'B.S. in Computer Science',
  },
  {
    name: 'Paramount High School (2015 - 2019)',
    degree: 'High School Diploma',
  },
];

export const Education = () => {
  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h4" gutterBottom>
        Education
      </Typography>
      <List sx={{ p: 0 }}>
        {schools.map(({ degree, name }) => (
          <ListItem sx={{ px: 0 }}>
            <ListItemDecorator>
              <SchoolRoundedIcon />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md">{degree}</Typography>
              <Typography fontSize="sm">{name}</Typography>
            </ListItemContent>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
