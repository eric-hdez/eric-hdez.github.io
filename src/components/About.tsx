import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const About = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Grid container>
        <Grid container item>
          <Typography variant="h5" component="h1" gutterBottom>
            About Me
          </Typography>
        </Grid>
        <Grid container item sx={{ pt: 2 }}>
          <Typography>
            Some of my current interests in computer science span programming
            languages, distributed systems, and computer systems overall. Last
            Summer, 2021, I interned at NVIDIA as a Software Engineer Intern for
            the Core RM team as part of their Ignite Program.{' '}
            <b>
              I am also an incoming Student Web Developer for the UC Santa Cruz
              ITS Department.
            </b>
            <br />
            <br />
            I have been involved in the Society of Hispanic Professional
            Engineers at UC Santa Cruz for the last four years. I am currently
            serving as the President of the organization, handling the day to
            day affairs of our student chapter. Being a mentor figure for my
            peers and uplifting them throughout their engineering careers has
            been a fulfilling and rewarding experience.
            <br />
            <br />I also work at the Jack Baskin School of Engineering here at
            UC Santa Cruz as an individual and group tutor. I tutor courses such
            Data Structures and Algorithms, Full Stack Web Development, and
            Computer Systems Design.{' '}
            <b>
              Currently, I am tutoring CSE13S: Computer Systems and C
              Programming, and CSE130: Principles of Computer Systems Design
            </b>
            .
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
