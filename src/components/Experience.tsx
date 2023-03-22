import React from 'react';
import { Avatar, Box, Divider, Stack, Typography } from '@mui/joy';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

const experiences = [
  {
    title: 'Software Engineer Intern',
    duration: 'Jun 2021 - Aug 2021',
    company: 'NVIDIA Corporation',
    description: `Worked with the GPU Core RM Team to develop a command line tool that checks for
     security defects, styling issues, and spelling errors in a Perforce changelist. This tool was
     part of an effort to clean up the codebase.`,
  },
  {
    title: 'Student Web Developer',
    duration: 'Jan 2023 - present',
    company: 'UCSC ITS Department',
    description: `Developing a web application that allows faculty and students at UCSC to upload
     poster designs and complete transactions for these prints. Notable technologies: JS, Vue, PHP,
     Laravel.`,
  },
];

const Timeline = () => {
  return (
    <Stack direction="column">
      {experiences.map(({ title, duration, company, description }, index) => (
        <>
          <Stack direction="row" spacing={1}>
            <Stack direction="column" width="50%" pr={1} textAlign="end" justifyContent="center">
              <Typography flexWrap="wrap">{title}</Typography>
              <Typography level="body2">{duration}</Typography>
            </Stack>
            <Divider orientation="vertical" sx={{ '--Divider-thickness': '2px' }}>
              <Avatar variant="solid" color="primary">
                <TerminalRoundedIcon />
              </Avatar>
            </Divider>
            <Stack direction="column" width="50%" pl={1} textAlign="start" justifyContent="center">
              <Typography>{company}</Typography>
              <Typography level="body2">{description}</Typography>
            </Stack>
          </Stack>
          {index + 1 !== experiences.length && (
            <Box display="flex" justifyContent="center" height={25}>
              <Divider orientation="vertical" sx={{ '--Divider-thickness': '2px' }} />
            </Box>
          )}
        </>
      ))}
    </Stack>
  );
};

export const Experience = () => {
  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h5" gutterBottom>
        Experience
      </Typography>
      <Timeline />
    </Stack>
  );
};
