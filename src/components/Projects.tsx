import React from "react";
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
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{pt: 20, px: 4, pb: 4}}>
            <LanguageIcon fontSize="large" color="secondary" />
            <Typography variant="h6" component="h1" gutterBottom>
              My Personal Website
            </Typography>
            <Grid container spacing={1}>
            <Grid item alignItems="center" justifyContent="center">
              <Link color="primary" underline="none" title="Personal Website Source Code">
                Going Public Soon
              </Link>
            </Grid>
            <Grid item alignItems="center" justifyContent="center">
              <Link color="primary" underline ="none" title="Personal Website Source Code">
                <KeyboardDoubleArrowRightIcon fontSize="medium" />
              </Link>
            </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{pt: 20, px: 4, pb: 4}}>
            <GamepadIcon fontSize="large" color="secondary" />
            <Typography variant="h6" component="h1" gutterBottom>
              Snake Game
            </Typography>
            <Grid container spacing={1}>
            <Grid item alignItems="center" justifyContent="center">
              <Link color="secondary" underline="hover" href="https://www.github.com/eric-hdez/snake-game" title="Snake Game Source Code">
                Check it out
              </Link>
            </Grid>
            <Grid item alignItems="center" justifyContent="center">
              <Link color="secondary" underline ="hover" href="https://www.github.com/eric-hdez/snake-game" title="Snake Game Source Code">
                <KeyboardDoubleArrowRightIcon fontSize="medium" />
              </Link>
            </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{pt: 20, px: 4, pb: 4}}>
            <KeyIcon fontSize="large" color="secondary" />
            <Typography variant="h6" component="h1" gutterBottom>
              Schmidt-Samoa Cryptosystem
            </Typography>
            <Grid container spacing={1}>
            <Grid item alignItems="center" justifyContent="center">
              <Link color="secondary" underline="hover" href="https://www.github.com/eric-hdez/schmidt-samoa" title="Schmidt Samoa Source Code">
                Check it out
              </Link>
            </Grid>
            <Grid item alignItems="center" justifyContent="center">
              <Link color="secondary" underline ="hover" href="https://www.github.com/eric-hdez/schmidt-samoa" title="Schmidt Samoa Source Code">
                <KeyboardDoubleArrowRightIcon fontSize="medium" />
              </Link>
            </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
