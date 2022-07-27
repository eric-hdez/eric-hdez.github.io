import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MailIcon from '@mui/icons-material/Mail';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
const eric = require("../eric.png");

export const Content = () => {
    return (
    <Container maxWidth="lg" sx={{backgroundColor: "skyblue"}}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid container item xs={12} sm={6} alignItems="center">
          <Typography variant="h4" sx={{fontFamily: "Verdana", marginBottom: "16px"}} textAlign="left">
            Hi There!<br />I'm Eric Hernandez.
          </Typography>
          <Typography variant="h6" sx={{fontFamily: "Verdana", marginBottom: "16px"}}>
            I'm a 4th year computer science student at the University of
            California, Santa Cruz.
          </Typography>
          <Button
            startIcon={<MailIcon />}
            variant="contained"
            color="primary"
            size="large"
            sx={{fontFamily: "Verdana"}}>
            Contact Me
          </Button>
        </Grid>
        <Grid container item xs={12} sm={6} alignItems="center" justifyContent="center">
          <Avatar src={eric} variant="rounded" sx={{height: '80%', width: '80%'}}/>
        </Grid>
      </Grid>
    </Container>
    )
}