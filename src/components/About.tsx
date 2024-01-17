import React from 'react';
import { Stack, Typography } from '@mui/joy';

export const About = () => {
  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h4" gutterBottom>
        About Me
      </Typography>
      <Typography>
        My interest in Computer Science spans programming languages, compilers, computer systems,
        and full-stack web development.{' '}
        <b>
          I have worked as a Student Software Developer for the UC Santa Cruz ITS Software
          Engineering team and a Software Engineer Intern for NVIDIA Corporation.
        </b>
        <br />
        <br />
        I was a member of the Society of Hispanic Professional Engineers at UC Santa Cruz for the
        past four years. I served as the President twice. Mentoring my peers and fostering an
        inclusive community for them in engineering was a fulfilling experience.
        <br />
        <br />I also worked as a Group Tutor in the Jack Baskin School of Engineering at UC Santa
        Cruz.{' '}
        <b>
          I tutored courses in Data Structures and Algorithms, Computer System Design, Full Stack
          Web Development, C Programming, and Python Programming.
        </b>
      </Typography>
    </Stack>
  );
};
