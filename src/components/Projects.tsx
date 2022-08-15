import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import KeyIcon from '@mui/icons-material/Key';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LanguageIcon from '@mui/icons-material/Language';
import GamepadIcon from '@mui/icons-material/Gamepad';

export const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{p: 4, backgroundColor: "white"}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" gutterBottom>
            Projects
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper square elevation={3} sx={{pt: 20, px: 4, pb: 4}}>
            <LanguageIcon fontSize="large" color="secondary" />
            <Typography variant="h6" component="h1">
              Personal Website
            </Typography>
            <Button
              size="medium"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              title="Source Code Going Public Soon"
              sx={{px:0}}
            >
              Going Public Soon
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper square elevation={3} sx={{pt: 20, px: 4, pb: 4}}>
            <GamepadIcon fontSize="large" color="secondary" />
            <Typography variant="h6" component="h1">
              Snake Game
            </Typography>
            <Button
              size="medium"
              color="secondary"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/eric-hdez/snake-game"
              title="Snake Game Source Code"
              sx={{px:0}}
            >
                Check it out
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper square elevation={3} sx={{pt: 20, px: 4, pb: 4}}>
            <KeyIcon fontSize="large" color="secondary" />
            <Typography variant="h6" component="h1">
              Schmidt-Samoa Cryptosystem
            </Typography>
            <Button
              size="medium"
              color="secondary"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/eric-hdez/schmidt-samoa"
              title="Schmidt-Samoa Cryptosystem Source Code"
              sx={{px:0}}
            >
                Check it out
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
