import React from "react";
import { Typography, Paper, Grid, IconButton, Avatar } from "@mui/material";

import profilePic from "./images/profile.jpg";

import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <section id="contact">
      <Typography variant="h1">Contact</Typography>
      <Grid item xs={12} direction="column" justifyContent="center" display="flex">
        <Paper elevation={8} className="contactCard" align="center">
          <Typography variant="h4" gutterBottom>
            Nils Bentlage
          </Typography>
          <Avatar src={profilePic} className="profilePic" alt="Nils Bentlage" />
          <IconButton href="tel:+4915228783790" target="_blank" size="large">
            <PhoneAndroidIcon />
          </IconButton>
          <IconButton href="mailto:nils.bentlage@googlemail.com" target="_blank" size="large">
            <EmailIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/nils-bentlage-a45362150/"
            target="_blank"
            size="large">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com/nilsbentlage" target="_blank" size="large">
            <GitHub />
          </IconButton>
        </Paper>
      </Grid>
      <Typography id="copyright" align="center">
        © 2020 | Nils Bentlage
      </Typography>
    </section>
  );
}

export default Contact;
