import React from 'react';
import Container from '@mui/material/Container';
import ComputerIcon from '@mui/icons-material/Computer';
import ListItemText from '@mui/material/ListItemText';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';

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

export const Experience = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{ pl: { xs: 2, sm: 0 } }}>
        Experience
      </Typography>
      <Timeline position="right" sx={{ px: 0, pt: 2 }}>
        {experiences.map(({ title, duration, company, description }) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <ListItemText primary={title} secondary={duration} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <ComputerIcon sx={{ color: 'white' }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {company}
              </Typography>
              <Typography variant="subtitle2">{description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};
