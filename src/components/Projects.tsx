import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyIcon from '@mui/icons-material/Key';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

import { CustomizedDialog } from './Dialog';

interface ProjectData {
  name: string;
  title: string;
  icon: JSX.Element;
  link: string;
  directive: string;
  description: string[];
  disabled: boolean;
}

const projects: ProjectData[] = [
  {
    name: 'Personal Portfolio',
    title: 'This website you are currently on!',
    icon: <CodeIcon fontSize="large" color="secondary" />,
    link: 'https://www.github.com/eric-hdez/eric-hdez.github.io',
    directive: 'More details',
    description: [
      'Developed my personal portfolio using Typescript, React, HTML, and CSS',
      'Used Material UI for the user interface design',
      'Hosted using Github Pages',
    ],
    disabled: false,
  },
  {
    name: 'Snake Game',
    title: 'A simple snake game built with Python and Pygame.',
    icon: <VideogameAssetIcon fontSize="large" color="secondary" />,
    link: 'https://www.github.com/eric-hdez/snake-game',
    directive: 'More details',
    description: [
      'Classic game of Snake, implemented in Python using Pygame',
      'Implements a start and end screen, with replayability and single lifetime high score',
    ],
    disabled: false,
  },
  {
    name: 'Schmidt-Samoa Cryptosystem',
    title: 'A simple implementation of the Schmidt-Samoa Cryptosystem.',
    icon: <KeyIcon fontSize="large" color="secondary" />,
    link: 'https://www.github.com/eric-hdez/schmidt-samoa-cryptosystem',
    directive: 'More details',
    description: [
      'A Python and C implementation of the Schmidt-Samoa Cryptosystem',
      'The C implementation generates public/private keys and encrypts/decrypts files',
      'The Python implementation works similarly, but only encrypts/decrypts stdin input',
    ],
    disabled: false,
  },
];

const Project = ({
  name,
  title,
  icon,
  link,
  directive,
  description,
  disabled,
}: ProjectData) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={3} sx={{ display: 'flex', backgroundColor: '#EEEEEE' }}>
        <Box
          sx={{
            pb: '20px',
            pl: '20px',
            pr: '20px',
            pt: '80px',
            width: '220px',
            position: 'relative',
            marginTop: 'auto',
          }}
        >
          <Box>
            {icon}
            <Typography sx={{ fontSize: '19px' }} noWrap>
              {name.split(' ')[0]}
              <br />
              {name.split(' ')[1]}
            </Typography>
            <Button
              size="small"
              color="secondary"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              onClick={handleOpenDialog}
              sx={{
                px: 0,
                textTransform: 'none',
                '&:hover': { backgroundColor: 'transparent' },
                display: { sm: 'none' },
              }}
              disabled={disabled}
            >
              <Typography>{directive}</Typography>
            </Button>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        />
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            p: '15px',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Typography>Description</Typography>
          <List dense={true} sx={{ pb: '50px' }}>
            {description.map((line) => (
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon sx={{ minWidth: '30px' }}>
                  <KeyboardArrowRightSharpIcon
                    fontSize="medium"
                    color="secondary"
                  />
                </ListItemIcon>
                <ListItemText>{line}</ListItemText>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            href={link}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#EEEEEE',
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              textTransform: 'none',
            }}
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            <Typography variant="subtitle2">Check it out</Typography>
          </Button>
        </Box>
      </Paper>
      <CustomizedDialog
        openDialog={openDialog}
        handleOpenDialog={handleOpenDialog}
        title={name}
        description={description}
        link={link}
      />
    </Grid>
  );
};

export const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4, backgroundColor: '#EEEEEE' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={1} sx={{ pt: 2, px: 0 }}>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </Grid>
    </Container>
  );
};
