import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const FastLinearProgress = styled(LinearProgress)({
  '& .MuiLinearProgress-bar': {
    transition: 'none',
  },
});

export const StatusBar = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const computeProgress = () => {
      const scrolled = document.documentElement.scrollTop;
      const scrollLength =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const progress = (100 * scrolled) / scrollLength;
      setProgress(progress);
    };

    window.addEventListener('scroll', computeProgress);
    return () => window.removeEventListener('scroll', computeProgress);
  }, []); // on mount and unmount

  return <FastLinearProgress variant="determinate" value={progress} color="primary" />;
};
