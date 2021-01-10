import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import { Grid, Button, Avatar, IconButton, Hidden, Typography } from "@material-ui/core";

import profilePic from "./profile.jpg";

function SideMenuItem(props) {
  return (
    <Grid item xs={12} align="center">
      <Button
        variant="contained"
        color="primary"
        style={{ width: "120px" }}
        href={props.href}
      >
        {props.children}
      </Button>
    </Grid>
  );
}

function Menu() {
  return (
    <Grid
      item
      container
      alignContent="center"
      xs={12}
      spacing={4}
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} align="center">
        <Avatar src={profilePic} className="profilePic" alt="Nils Bentlage" />
        <Typography variant="h6" color="textPrimary" style={{paddingTop: "1rem"}}>Contact Me!</Typography>
        <IconButton href="tel:+4915228783790" target="_blank">
          <PhoneAndroidIcon />
        </IconButton>
        <IconButton href="mailto:nils.bentlage@googlemail.com" target="_blank">
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
      </Grid>
      <SideMenuItem href="#home">Home</SideMenuItem>
      <SideMenuItem href="#skills">Skills</SideMenuItem>
      <SideMenuItem href="#vita">Vita</SideMenuItem>
      <SideMenuItem href="#showcase">Showcase</SideMenuItem>
      <Hidden smUp>
      <SideMenuItem href="#contact">Contact</SideMenuItem>
      </Hidden>
    </Grid>
  );
}

export default Menu;
