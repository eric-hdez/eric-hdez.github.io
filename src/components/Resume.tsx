import React from 'react';
import { Link, Stack, Typography } from '@mui/joy';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ResumePdf from '../resume/eric_hdez_resume_sept-8.pdf';

const resumeLink = (
  <Link href={ResumePdf} target="_blank" rel="noopener noreferrer" title="Eric's Resume">
    <LaunchRoundedIcon />
  </Link>
);

export const Resume = () => {
  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h4" endDecorator={resumeLink}>
        Resume
      </Typography>
    </Stack>
  );
};
