import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// import Tabs from '@mui/joy/Tabs';
// import TabList from '@mui/joy/TabList';
// import Tab from '@mui/joy/Tab';
import Typography from '@mui/material/Typography';

const skills = {
  Technical: [
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
      name: 'HTML',
      proficiency: 'Novice',
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
  ],
  Personal: [
    {
      name: 'Leadership',
      proficiency: undefined,
    },
    {
      name: 'Public Speaking',
      proficiency: undefined,
    },
    {
      name: 'Time Management',
      proficiency: undefined,
    },
    {
      name: 'Teamwork',
      proficiency: undefined,
    },
    {
      name: 'Communication',
      proficiency: undefined,
    },
  ],
};

export const Skills = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Skills
      </Typography>
      {/* <Tabs value={value} onChange={(event, value) => setValue(value as number)}>
        <TabList>
          {Object.keys(skills).map((key) => (
            <Tab>{key}</Tab>
          ))}
        </TabList>
      </Tabs> */}
      <Tabs value={value} onChange={handleChange} indicatorColor="secondary" centered>
        {Object.keys(skills).map((key) => (
          <Tab
            label={<Typography variant="body1">{key}</Typography>}
            sx={{ textTransform: 'none' }}
          />
        ))}
      </Tabs>
      <Divider />
      {Object.entries(skills).map((entry, index) => (
        <Box hidden={value !== index}>
          <Grid container spacing={2} sx={{ pt: 2 }}>
            {entry[1].map(({ name, proficiency }) => (
              <Grid container item justifyContent="space-between">
                <Typography display="inline" align="left">
                  {name}
                </Typography>
                {proficiency && (
                  <Chip
                    label={proficiency}
                    size="small"
                    color="secondary"
                    sx={{ color: '#EEEEEE' }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};
