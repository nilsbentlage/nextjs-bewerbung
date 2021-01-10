import React from "react";

import { Grid, Hidden, Fab } from "@material-ui/core";

import Splash from "./components/Splash";
import Skills from "./components/Skills";
import Vita from "./components/Vita";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import SideMenu from "./components/SideMenu";
import FabMenu from "./components/FabMenu";

import MenuIcon from "@material-ui/icons/Menu";

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <Grid container style={{ maxWidth: "1600px", margin: "auto" }}>
      <Grid
        item
        container
        xs={12}
        sm={9}
        style={{ maxHeight: "100vh", overflowY: "scroll" }}
      >
        <Splash />
        <Skills />
        <Vita />
        <Showcase />
        <Hidden smUp>
          <Contact />
        </Hidden>
      </Grid>
      <Hidden only="xs">
        <Grid item container sm={3}>
          <SideMenu />
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Fab
          color="primary"
          style={{ position: "fixed", bottom: "16px", right: "16px" }}
          onClick={handleClick}
        >
          <MenuIcon />
        </Fab>
        <FabMenu
          anchorEl={anchorEl}
          Boolean={Boolean}
          handleClose={handleClose}
        />
      </Hidden>
    </Grid>
  );
}

export default App;
