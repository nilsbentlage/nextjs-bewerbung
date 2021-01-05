import React from "react";

import { Grid, Link } from "@material-ui/core";

function MenuItem(props) {
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
      <MenuItem href="#home">Home</MenuItem>
      <MenuItem href="#skills">Skills</MenuItem>
      <MenuItem href="#vita">Vita</MenuItem>
      <MenuItem href="#showcase">Showcase</MenuItem>
      <MenuItem href="#contact">Contact</MenuItem>
    </Grid>
  );
}

export default Menu;
