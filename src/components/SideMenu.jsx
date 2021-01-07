import React from "react";

import { Grid, Button } from "@material-ui/core";

function SideMenuItem(props) {
  return (
    <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" style={{width: "120px"}} href={props.href}>{props.children}</Button>
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
