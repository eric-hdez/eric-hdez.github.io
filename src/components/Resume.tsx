import React from 'react';
import { Box } from '@mui/joy';
import ResumePdf from '../resume/eric_hdez_resume_dec.pdf';

export const Resume = () => {
  return (
    // calc(100vh - 316px)
    <Box height="535px">
      <embed src={ResumePdf} type="application/pdf" width="100%" height="100%" />
    </Box>
  );
};
