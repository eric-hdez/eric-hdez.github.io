import React from 'react';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Badge = ({ label }: { label: string }) => (
  <Chip
    label={label}
    size="small"
    color="secondary"
    sx={{ color: '#EEEEEE' }}
  />
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
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Languages
      </Typography>
      <Grid container spacing={2} sx={{ pt: 2 }}>
        {languages.map(({ name, badges }) => (
          <Grid container item justifyContent="space-between">
            <Typography display="inline" align="left">
              {name}
            </Typography>
            <Stack direction="row" spacing={0.75}>
              {badges.map((badge) => badge)}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
