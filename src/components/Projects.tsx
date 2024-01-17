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
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
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
    name: 'Baskin Marketplace',
    title: 'A Full Stack Marketplace Web Application',
    icon: <StoreRoundedIcon color="primary" sx={iconStyle} />,
    link: 'https://www.baskin.app',
    directive: 'More details',
    description: [
      'Collaborated on a full stack marketplace web app with 5 other students',
      `Applied knowledge of TypeScript, Next.js, GraphQL, PostgresQL, Microservices,
       CI, and Containerization`,
    ],
    disabled: false,
  },
  {
    name: 'Schmidt-Samoa Cryptosystem',
    title: 'A simple implementation of the Schmidt-Samoa Cryptosystem.',
    icon: <KeyRoundedIcon color="primary" sx={iconStyle} />,
    link: 'https://www.github.com/eric-hdez/schmidt-samoa-cryptosystem',
    directive: 'More details',
    description: ['Python and C implementation of the Schmidt-Samoa Cryptosystem'],
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
    ],
    disabled: false,
  },
  {
    name: 'Personal Portfolio',
    title: 'The website you are currently on!',
    icon: <CodeRoundedIcon color="primary" sx={iconStyle} />,
    link: 'https://www.github.com/eric-hdez/eric-hdez.github.io',
    directive: 'More details',
    description: [
      'Developed this personal website using Typescript, React.js, Material UI, and Joy UI',
      'Website is hosted via Google Firebase',
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
      'Implements start and end screens with replayability and tracks single session high score',
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
            <Typography level="title-md">{name}</Typography>
            <Link
              component="button"
              variant="plain"
              underline="none"
              width="fit-content"
              endDecorator={<EastRoundedIcon />}
              borderRadius="md"
              sx={{ display: { sm: 'none' } }}
              onClick={toggleModal}
            >
              {directive}
            </Link>
          </Stack>
        </Box>
        <Divider orientation="vertical" sx={{ display: { xs: 'none', sm: 'flex' } }} />
        <Box pl={0} width="100%" height="100%" display={{ xs: 'none', sm: 'block' }}>
          <Stack direction="column" height="inherit">
            <Typography level="title-md">Summary</Typography>
            <Box my={1} sx={{ overflowY: { sm: 'auto', md: 'auto' } }}>
              <List sx={{ mx: 0, py: 0, '--List-decorator-size': '25px' }}>
                {description.map(line => (
                  <ListItem sx={{ px: '0px', py: '1px' }}>
                    <ListItemDecorator sx={{ mr: '-20px' }}>
                      <KeyboardArrowRightRoundedIcon color="primary" />
                    </ListItemDecorator>
                    <Typography fontSize="sm">{line}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
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
      <Typography level="h4" gutterBottom>
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
