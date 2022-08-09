import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';

const eric = require("../eric.png");

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{p: 4, my: 4, backgroundColor: "secondary.main"}}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid container item xs={12} md={7} order={{xs: 2, md: 2}}alignItems="center">
          <Typography variant="h4" sx={{marginBottom: "16px"}} textAlign="left">
            Hi There!<br />I'm Eric Hernandez.
          </Typography>
          <Typography variant="h6" sx={{marginBottom: "32px"}}>
            I'm a 4th year computer science student at the University of
            California, Santa Cruz.
          </Typography>
          <br/>
          <Button
            startIcon={<MailIcon />}
            variant="contained"
            color="primary"
            size="large"
            sx={{fontFamily: "Verdana"}}>
              Contact Me
          </Button>
        </Grid>
        <Grid container item xs={12} md={5} order={{xs: 1, md:1}} alignItems="center" justifyContent="center">
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Avatar src={eric} variant="rounded" sx={{height: "262px", width: "350px"}} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}