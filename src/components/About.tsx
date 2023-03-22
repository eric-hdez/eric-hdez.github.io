import React from 'react';
import { Stack, Typography } from '@mui/joy';

export const About = () => {
  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h5" gutterBottom>
        About Me
      </Typography>
      <Typography>
        My interest in Computer Science spans programming languages, compilers, computer systems,
        and full-stack web development.{' '}
        <b>
          I currently work for the UC Santa Cruz ITS department as a Student Web Developer; in the
          Summer of 2021, I got the opportunity to intern as a Software Engineer at NVIDIA.
        </b>
        <br />
        <br />
        I have been involved in the Society of Hispanic Professional Engineers at UC Santa Cruz for
        the last four years. I am currently serving as the President of the organization. Mentoring
        my peers and creating a community for them in engineering has been a fulfilling and
        rewarding experience.
        <br />
        <br />I also work as a group tutor in the Jack Baskin School of Engineering at UC Santa
        Cruz.{' '}
        <b>
          Currently, I tutor CSE13S: Computer Systems and C Programming and CSE130: Principles of
          Computer Systems Design.
        </b>
      </Typography>
    </Stack>
  );
};
