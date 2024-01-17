import React from 'react';
import { Avatar, Box, Divider, Stack, Typography } from '@mui/joy';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

const experiences = [
  {
    title: 'Software Engineer Intern',
    duration: 'Jun 2021 - Aug 2021',
    company: 'NVIDIA Corporation',
    description: `Worked with the GPU Core RM Team to develop a code review tool that checks for
     security defects, styling issues, and spelling errors in a Perforce changelist. This tool was
     part of an effort to clean up our team's codebase. I assisted with debugging security bugs for
     the GPU's resource manager on the Linux platform.`,
  },
  {
    title: 'Student Software Developer',
    duration: 'Jan 2023 - Sep 2023',
    company: 'UCSC ITS Software Engineering',
    description: `Migrated a web application that enhances poster design submissions and printing
      transactions for students and faculty to a new web stack (Vue.js, PHP Laravel, Apache, MySQL).
      I improved the handling of back-end payment integration errors and their presentation on the
      front-end. I am currently assisting with documentation writing for the application.`,
  },
  {
    title: 'Software Engineer',
    duration: 'Start: Feb 2024',
    company: 'Bloomberg LP',
    description:
      'Excited to announce that I accepted my offer to join Bloomberg LP in NYC as a Software Engineer',
  },
];

const Timeline = () => {
  return (
    <Stack direction="column">
      {experiences.map(({ title, duration, company, description }, index) => (
        <>
          <Stack direction="row" spacing={1}>
            <Stack direction="column" width="50%" pr={1} textAlign="end" justifyContent="center">
              <Typography flexWrap="wrap" level="title-md">
                {title}
              </Typography>
              <Typography fontSize="sm">{duration}</Typography>
            </Stack>
            <Divider orientation="vertical" sx={{ '--Divider-thickness': '2px' }}>
              <Avatar variant="solid" color="primary">
                <TerminalRoundedIcon />
              </Avatar>
            </Divider>
            <Stack direction="column" width="50%" pl={1} textAlign="start" justifyContent="center">
              <Typography level="title-md">{company}</Typography>
              <Typography fontSize="sm">{description}</Typography>
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
      <Typography level="h4" gutterBottom>
        Experience
      </Typography>
      <Timeline />
    </Stack>
  );
};
