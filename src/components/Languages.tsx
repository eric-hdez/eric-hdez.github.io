import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/joy';

const Badge = ({ label }: { label: string }) => (
  <Chip size="sm" color="primary" variant="solid">
    {label}
  </Chip>
);

const languages = [
  {
    name: 'English',
    badges: [<Badge label="Native" />, <Badge label="Bilingual Proficiency" />],
  },
  {
    name: 'Spanish',
    badges: [<Badge label="Native" />, <Badge label="Bilingual Proficiency" />],
  },
];

export const Languages = () => {
  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h4" gutterBottom>
        Languages
      </Typography>
      <Stack direction="column" spacing={2}>
        {languages.map(({ name, badges }) => (
          <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
            <Box pr={1}>
              <Typography>{name}</Typography>
            </Box>
            <Stack direction="row" spacing={0.75}>
              {badges.map(badge => badge)}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
