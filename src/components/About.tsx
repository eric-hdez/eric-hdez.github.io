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
            My interests in computer science span programming languages, compilers, computer
            systems, and full stack web development.{' '}
            <b>
              I currently work for the UC Santa Cruz ITS department as a Student Web Developer, and
              in the Summer of 2021, I got the opportunity to intern as a Software Engineer at
              NVIDIA.
            </b>
            <br />
            <br />
            I have been involved in the Society of Hispanic Professional Engineers at UC Santa Cruz
            for the last four years. I am currently serving as the President of the organization.
            Mentoring my peers and creating a community for them in engineering has been a
            fulfilling and rewarding experience.
            <br />
            <br />I also work in the Jack Baskin School of Engineering at UC Santa Cruz as a group
            tutor.{' '}
            <b>
              Currently, I am tutoring CSE13S: Computer Systems and C Programming, and CSE130:
              Principles of Computer Systems Design.
            </b>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
