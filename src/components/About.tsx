import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const About = () => {
  return (
    <Container maxWidth="lg" sx={{p: 4, backgroundColor: "white"}}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid container item>
          <Typography variant="h5" component="h1" gutterBottom>
            About Me
          </Typography>
        </Grid>
        <Grid container item sx={{pt: 2}}>
          <Typography>
            Some of my current interests in computer science span compiler design, programming
            languages, distributed systems, and computer systems overall. Last Summer, 2021, I
            interned at NVIDIA as a Software Engineer Intern for the Core RM team as part of their
            Ignite Program. I have been involved in the Society of Hispanic Professional Engineers
            at UC Santa Cruz for the last four years. I am currently serving as the President of
            the organization. Being a mentor for my peers and uplifting them throughout
            their engineering careers has been a fulfilling experience for me. I also 
            work as an individual and group tutor at the Jack Baskin School of Engineering at UC
            Santa Cruz. I tutor courses such as Beginning Programming in Python, Introduction to
            Data Structures and Algorithms, and Computer Systems and C Programming.
          </Typography>
        </Grid>
      </Grid>
    </ Container>
  );
};