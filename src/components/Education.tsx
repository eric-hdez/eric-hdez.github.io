import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import SchoolIcon from '@mui/icons-material/School';

export const Education = () => {
  return (
    <Container maxWidth="lg" sx={{p: 4, backgroundColor: "#EEEEEE"}}>
      <Typography variant="h5" component="h1" gutterBottom>
        Education
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="B.S. in Computer Science" secondary="University of California, Santa Cruz (2019 - current)" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="High School Diploma" secondary="Paramount High School (2015 - 2019)" />
        </ListItem>
      </List>
    </Container>
  );
};
