import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
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
            <LanguageIcon fontSize="large" />
            <Typography variant="h6" component="h1" gutterBottom>
              My Personal Website
            </Typography>
            <Grid container spacing={1}>
            <Grid item alignItems="center" justifyContent="center">
              <Link underline="hover" href="https://www.github.com/eric-hdez/eric-hdez.github.io">
                Check it out
              </Link>
            </Grid>
            <Grid item alignItems="center" justifyContent="center">
              <Link underline ="hover" href="https://www.github.com/eric-hdez/eric-hdez.github.io">
                <KeyboardDoubleArrowRightIcon fontSize="medium" />
              </Link>
            </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{pt: 20, px: 4, pb: 4}}>
            <GamepadIcon fontSize="large" />
            <Typography variant="h6" component="h1" gutterBottom>
              Snake Game
            </Typography>
            <Grid container spacing={1}>
            <Grid item alignItems="center" justifyContent="center">
              <Link underline="hover" href="https://www.github.com/eric-hdez/snake-game">
                Check it out
              </Link>
            </Grid>
            <Grid item alignItems="center" justifyContent="center">
              <Link underline ="hover" href="https://www.github.com/eric-hdez/snake-game">
                <KeyboardDoubleArrowRightIcon fontSize="medium" />
              </Link>
            </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{pt: 20, px: 4, pb: 4}}>
            <KeyIcon fontSize="large" />
            <Typography variant="h6" component="h1" gutterBottom>
              Schmidt-Samoa Cryptosystem
            </Typography>
            <Grid container spacing={1}>
            <Grid item alignItems="center" justifyContent="center">
              <Link underline="hover" href="https://www.github.com/eric-hdez/schmidt-samoa">
                Check it out
              </Link>
            </Grid>
            <Grid item alignItems="center" justifyContent="center">
              <Link underline ="hover" href="https://www.github.com/eric-hdez/schmidt-samoa">
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