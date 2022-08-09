import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from "@mui/material/Typography";
import WebIcon from '@mui/icons-material/Web';

export const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{p: 4, backgroundColor: "white"}}>
      <Typography variant="h5" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Grid container sx={{pt: 2}}>
        <Grid item sx={{pr: 1}}>
          <LocationCityIcon fontSize="small" />
        </Grid>
        <Grid item>
          <Typography>Santa Cruz, CA</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{pt: 2}}>
        <Grid item sx={{pr: 1}}>
          <MailOutlineIcon fontSize="small" />
        </Grid>
        <Grid item>
          <Link
            href="mailto:eherna97@ucsc.edu"
            target="_blank"
            rel="noopener noreferrer"
          > 
            eherna97@ucsc.edu
          </Link>
        </Grid>
      </Grid>
      <Grid container sx={{pt: 2}}>
        <Grid item sx={{pr: 1}}>
          <WebIcon fontSize="small" />
        </Grid>
        <Grid item>
          <Link 
            href="https://eric-hdez.github.io/"
          >
            eric-hdez.github.io
          </Link>
        </Grid>
      </Grid>
    </ Container>
  );
}