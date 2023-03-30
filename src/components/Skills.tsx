import React, { useState } from 'react';
import { Box, Chip, Stack, Tab, TabList, Tabs, Typography } from '@mui/joy';

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
      name: 'TypeScript',
      proficiency: 'Competent',
    },
    {
      name: 'JavaScript',
      proficiency: 'Competent',
    },
    {
      name: 'React.js',
      proficiency: 'Competent',
    },
    {
      name: 'Node.js',
      proficiency: 'Competent',
    },
    {
      name: 'Express.js',
      proficiency: 'Competent',
    },
    {
      name: 'PostgreSQL',
      proficiency: 'Competent',
    },
    {
      name: 'REST APIs',
      proficiency: 'Competent',
    },
    {
      name: 'GraphQL',
      proficiency: 'Competent',
    },
    {
      name: 'Git',
      proficiency: 'Competent',
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

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string | number | boolean,
  ) => {
    setValue(newValue as number);
  };

  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h5" gutterBottom>
        Skills
      </Typography>
      <Tabs value={value} size="md" onChange={handleChange} sx={{ borderRadius: 'md' }}>
        <TabList variant="plain">
          {Object.keys(skills).map((key, index) => (
            <Tab
              value={index}
              variant={value === index ? 'solid' : 'plain'}
              color={value === index ? 'primary' : 'neutral'}
            >
              {key}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      {Object.entries(skills).map((entry, index) => (
        <Box hidden={value !== index}>
          <Stack direction="column" spacing={2}>
            {entry[1].map(({ name, proficiency }) => (
              <Box display="flex" justifyContent="space-between">
                <Typography>{name}</Typography>
                {proficiency && <Chip size="sm">{proficiency}</Chip>}
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};
