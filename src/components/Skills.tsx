import React from 'react';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const skills = [
  {
    name: 'C',
    proficiency: 'Proficient',
  },
  {
    name: 'Python',
    proficiency: 'Proficient',
  },
  {
    name: 'C++',
    proficiency: 'Competent',
  },
  {
    name: 'Git',
    proficiency: 'Competent',
  },
  {
    name: 'JS/TS/React',
    proficiency: 'Competent',
  },
  {
    name: 'Express.js',
    proficiency: 'Novice',
  },
  {
    name: 'OpenAPI',
    proficiency: 'Novice',
  },
  {
    name: 'PostgreSQL',
    proficiency: 'Novice',
  },
];

export const Skills = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2} sx={{ pt: 2 }}>
        {skills.map(({ name, proficiency }) => (
          <Grid container item justifyContent="space-between">
            <Typography display="inline" align="left">
              {name}
            </Typography>
            <Chip
              label={proficiency}
              size="small"
              color="secondary"
              sx={{ color: '#EEEEEE' }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
