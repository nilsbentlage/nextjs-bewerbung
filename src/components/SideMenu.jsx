import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";

import {
  Grid,
  Button,
  Avatar,
  IconButton,
  Hidden,
  Typography,
  Link,
} from "@mui/material";

import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import profilePic from "./images/profile.jpg";

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
        <Avatar
          src={profilePic}
          className="profilePic"
          alt="Nils Bentlage"
          title="Nils Bentlage"
        />
        <Typography
          variant="h6"
          color="textPrimary"
          style={{ paddingTop: "1rem" }}
        >
          Contact Me!
        </Typography>

        <PopupState variant="popover">
          {(popupState) => (
            <div style={{ display: "inline-block" }}>
              <IconButton {...bindTrigger(popupState)} title="Mobil: +49 1522 8783790" size="large">
                <PhoneAndroidIcon />
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <Box p={2}>
                  <Typography variant="h6">
                    <Link href="tel:+4915228783790" target="_blank">
                      +49 1522 8783790
                    </Link>
                  </Typography>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
        <IconButton
          href="mailto:nils.bentlage@googlemail.com"
          target="_blank"
          title="E-Mail: nils.bentlage@googlemail.com"
          size="large">
          <EmailIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/nils-bentlage-a45362150/"
          target="_blank"
          title="LinkedIn: Nils Bentlage"
          size="large">
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/nilsbentlage"
          target="_blank"
          title="GitHub: nilsbentlage"
          size="large">
          <GitHub />
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
