import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
  
import "./Progress.css";

export const StatusBar = () => {
  const [progress, setProgress] = useState<number>(0);
  
  useEffect(() => {
    let computeProgress = () => {
      const scrolled = document.documentElement.scrollTop;
      const scrollLength = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = 100*scrolled/scrollLength;
      setProgress(progress);
    }
  
    window.addEventListener("scroll", computeProgress);
    return () => window.removeEventListener("scroll", computeProgress);
  }, []);
  
  return (
      <LinearProgress variant="determinate" value={progress} color="primary" />
  );
}