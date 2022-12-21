import React from 'react';
import Container from '@mui/material/Container';
import ComputerIcon from '@mui/icons-material/Computer';
import ListItemText from '@mui/material/ListItemText';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export const Experience = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, backgroundColor: '#EEEEEE' }}>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{ pl: { xs: 2, sm: 0 }, pb: 2 }}
      >
        Experience
      </Typography>
      <Timeline position="right" sx={{ px: 0 }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <ListItemText
              primary="Software Engineer Intern"
              secondary="Jun 2021 - Aug 2021"
            />
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
              NVIDIA Corporation
            </Typography>
            <Typography variant="subtitle2">
              Worked with the GPU Core RM Team developing a command line tool
              that checks a Perforce changelist against the coding standard,
              checks for spelling errors, and reports any security
              vulnerabilities. This was part of an effort to clean up the
              codebase.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <ListItemText primary="Open to Spring 2023 internships and new grad/ early career opportunities" />
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
              Coming Soon...
            </Typography>
            <Typography variant="subtitle2">To a theater near you!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};
