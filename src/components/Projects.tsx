import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{p: 4, backgroundColor: "white"}}>
      <Grid container spacing={3}>
        <Grid item>
          <Paper>
            <Typography variant="h5" component="h1" gutterBottom>
              Project 1
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};