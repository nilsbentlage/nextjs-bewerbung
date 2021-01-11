import React from "react";
import { Typography, Paper, Grid, IconButton, Avatar } from "@material-ui/core";

import profilePic from "./profile.jpg";

import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Contact() {
  return (
    <section id="contact">
      <Typography variant="h1">Contact</Typography>
      <Grid item xs={12}>
        <Paper elevation={8} className="contactCard" align="center">
          <Typography variant="h4" gutterBottom>Nils Bentlage</Typography>
          <Avatar src={profilePic} className="profilePic" alt="Nils Bentlage" />
          <IconButton href="tel:+4915228783790" target="_blank">
            <PhoneAndroidIcon />
          </IconButton>
          <IconButton
            href="mailto:nils.bentlage@googlemail.com"
            target="_blank"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/nils-bentlage-a45362150/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://twitter.com/nbentlage" target="_blank">
            <TwitterIcon />
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
