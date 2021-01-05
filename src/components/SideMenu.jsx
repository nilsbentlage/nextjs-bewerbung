import React from "react";

import { Grid, Link } from "@material-ui/core";

function SideMenuItem(props) {
  return (
    <Grid item xs={12} align="center">
      <Link href={props.href}>{props.children}</Link>
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
      <SideMenuItem href="#home">Home</SideMenuItem>
      <SideMenuItem href="#skills">Skills</SideMenuItem>
      <SideMenuItem href="#vita">Vita</SideMenuItem>
      <SideMenuItem href="#showcase">Showcase</SideMenuItem>
      <SideMenuItem href="#contact">Contact</SideMenuItem>
    </Grid>
  );
}

export default Menu;
