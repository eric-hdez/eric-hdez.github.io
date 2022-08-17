import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';

const eric = require("../eric.png");
// mx:-2, my:0,
export const Home = () => { 
  return (
    <Container maxWidth="lg" sx={{p: 4, backgroundColor: "#eeeeee"}}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={7} lg={8} order={{xs: 2, md: 2}} alignItems="center">
          <Grid item xs={12}>
          <Typography variant="h4" sx={{marginBottom: "16px"}} textAlign="left">
            Hi There!<br />I'm Eric Hernandez.
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h6" sx={{marginBottom: "16px"}}>
            I'm a 4th year computer science student at the University of
            California, Santa Cruz.
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <IconButton 
            edge="start"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ericherna19/"
            title="Eric's LinkedIn Profile"
            aria-label="Eric's LinkedIn Profile"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/eric-hdez"
            title="Eric's Github Profile"
            aria-label="Eric's Github Profile"
          >
            <GitHubIcon />
          </IconButton>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={5} lg={4} order={{xs: 1, md:1}} alignItems="center" justifyContent="center">
          <Avatar src={eric} variant="rounded" sx={{height: "262px", width: "350px"}} />
        </Grid>
      </Grid>
    </Container>
  );
}

// 262 350
// 276 370
