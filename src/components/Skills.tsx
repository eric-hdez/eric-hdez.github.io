import React, { useState } from 'react';
import { Box, Chip, Stack, Tab, TabList, Tabs, Typography, tabClasses } from '@mui/joy';

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
      name: 'Vue.js',
      proficiency: 'Beginner',
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
      name: 'Laravel',
      proficiency: 'Beginner',
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
      name: 'HTML',
      proficiency: 'Competent',
    },
    {
      name: 'CSS',
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
      name: 'Collaboration',
      proficiency: undefined,
    },
    {
      name: 'Communication',
      proficiency: undefined,
    },
    {
      name: 'Critical Thinking',
      proficiency: undefined,
    },
  ],
};

export const Skills = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event> | null,
    newValue: string | number | null,
  ) => {
    setValue(newValue as number);
  };

  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h4" gutterBottom>
        Skills
      </Typography>
      <Tabs
        value={value}
        size="lg"
        onChange={handleChange}
        sx={{ borderRadius: 'lg', [`& .${tabClasses.root}`]: { fontSize: 'md' } }}
      >
        <TabList
          variant="plain"
          tabFlex={1}
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: 'lg',
          }}
        >
          {Object.keys(skills).map((key, index) => (
            <Tab
              disableIndicator
              value={index}
              variant={value === index ? 'solid' : 'plain'}
              color={value === index ? 'primary' : 'neutral'}
            >
              {key}
              {/* <Typography level="body-md">{key}</Typography> */}
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
                {proficiency && (
                  <Chip size="sm" color="primary" variant="solid">
                    {proficiency}
                  </Chip>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};
