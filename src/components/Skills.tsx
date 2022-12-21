import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

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
    proficiency: 'Intermediate',
  },
  {
    name: 'Git',
    proficiency: 'Intermediate',
  },
  {
    name: 'OpenAPI',
    proficiency: 'Beginner',
  },
  {
    name: 'Express.js',
    proficiency: 'Beginner',
  },
  {
    name: 'JS/TS/React',
    proficiency: 'Beginner',
  },
  {
    name: 'PostgreSQL',
    proficiency: 'Beginner',
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
