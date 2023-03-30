import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Link,
  List,
  ListItemDecorator,
  ListItem,
  Stack,
  Typography,
} from '@mui/joy';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import HttpRoundedIcon from '@mui/icons-material/HttpRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';

import { CustomModal } from './Dialog';

interface Project {
  name: string;
  title: string;
  icon: JSX.Element;
  link: string;
  directive: string;
  description: string[];
  disabled: boolean;
}

const iconStyle = {
  fontSize: '36px',
};

const projects: Project[] = [
  {
    name: 'Personal Portfolio',
    title: 'This website you are currently on!',
    icon: <CodeRoundedIcon color="primary" sx={iconStyle} />,
    link: 'https://www.github.com/eric-hdez/eric-hdez.github.io',
    directive: 'More details',
    description: [
      'Developed a personal portfolio using Typescript, React.js, Material UI, and Joy UI',
      'website is hosted using Github Pages',
    ],
    disabled: false,
  },
  {
    name: 'Multi-threaded HTTP Server',
    title: 'A multi-threaded HTTP Server',
    icon: <HttpRoundedIcon color="primary" sx={iconStyle} />,
    link: 'https://www.github.com/eric-hdez/httpserver',
    directive: 'More details',
    description: [
      'Multi-threaded HTTP Server in C that serves atomic GET, PUT, and APPEND requests',
      'Implements asynchronous IO using epoll and non-blocking IO',
    ],
    disabled: false,
  },
  {
    name: 'Snake Game',
    title: 'A simple snake game built with Python and Pygame.',
    icon: <VideogameAssetRoundedIcon color="primary" sx={iconStyle} />,
    link: 'https://www.github.com/eric-hdez/snake-game',
    directive: 'More details',
    description: [
      'Classic game of Snake, implemented in Python using Pygame',
      'Implements a start and end screen with replayability',
    ],
    disabled: false,
  },
  {
    name: 'Schmidt-Samoa Cryptosystem',
    title: 'A simple implementation of the Schmidt-Samoa Cryptosystem.',
    icon: <KeyRoundedIcon color="primary" sx={iconStyle} />,
    link: 'https://www.github.com/eric-hdez/schmidt-samoa-cryptosystem',
    directive: 'More details',
    description: [
      'A Python and C implementation of the Schmidt-Samoa Cryptosystem',
      'C implementation uses the GNU Multiple Precision Library',
    ],
    disabled: false,
  },
];

const Project = ({ name, title, icon, link, directive, description }: Project) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Card orientation="horizontal" variant="outlined" sx={{ width: '100%', height: '240px' }}>
        <Box minWidth="180px" maxWidth="180px">
          <Stack direction="column" height="100%" justifyContent="flex-end" gap={1}>
            {icon}
            <Typography>{name}</Typography>
            <Link
              component="button"
              variant="plain"
              underline="none"
              width="fit-content"
              endDecorator={<EastRoundedIcon />}
              sx={{ display: { sm: 'none' } }}
              onClick={toggleModal}
            >
              {directive}
            </Link>
          </Stack>
        </Box>
        <Divider orientation="vertical" sx={{ display: { xs: 'none', sm: 'flex' } }} />
        <Box pl={2} width="100%" height="100%" display={{ xs: 'none', sm: 'block' }}>
          <Stack direction="column" height="inherit">
            <Typography>Description</Typography>
            <List sx={{ '--List-decorator-size': '25px' }}>
              {description.map(line => (
                <ListItem sx={{ px: '6px', py: '1px' }}>
                  <ListItemDecorator>
                    <KeyboardArrowRightRoundedIcon color="primary" />
                  </ListItemDecorator>
                  <Typography level="body2">{line}</Typography>
                </ListItem>
              ))}
            </List>
            <Box display="flex" flexGrow={1} alignItems="flex-end">
              <Button
                fullWidth
                component={Link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                underline="none"
              >
                Check it out!
              </Button>
            </Box>
          </Stack>
        </Box>
      </Card>
      <CustomModal
        openModal={openModal}
        toggleModal={toggleModal}
        title={name}
        description={description}
        link={link}
      />
    </>
  );
};

export const Projects = () => {
  return (
    <Stack direction="column" p={4} spacing={2}>
      <Typography level="h5" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={1} p={0}>
        {projects.map(project => (
          <Grid xs={12}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
