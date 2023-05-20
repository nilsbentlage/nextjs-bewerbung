import React from "react";

import {
  Grid,
  Hidden,
  Fab,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import Splash from "./components/Splash";
import Skills from "./components/Skills";
import Vita from "./components/Vita";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import SideMenu from "./components/SideMenu";
import FabMenu from "./components/FabMenu";

import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = React.useState(false);

  const unlock = (ev) => {
    // If you find this function, congrants. You found all the Information you could have found on GitHub (link below) ;)
    ev.preventDefault();
    if (document.getElementById("password").value === "rmnwmplr?") {
      setVisible(true);
    } else {
      document.getElementById("password").value = "Wrong Password!";
      setError(true);
      setTimeout(() => {
        document.getElementById("password").value = "";
        setError(false);
      }, 1500);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        className="password-protection"
        style={{ display: visible ? "none" : "flex" }}
      >
        <form onSubmit={unlock} action="#" id="myForm">
          <Typography variant="h3">Schön, dass Sie da sind!</Typography>
          <Typography variant="h4">Das Passwort, bitte:</Typography>
          <TextField
            error={error}
            type="password"
            variant="standard"
            id="password"
            autoFocus
            autoComplete="off"
          />
          <br></br>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </div>
      <Grid
        container
        style={{
          maxWidth: "1720px",
          paddingInline: "1rem",
          transition: "opacity 1s",
          margin: "auto",
          opacity: visible ? 1 : 0,
        }}
      >
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
            style={{ position: "fixed", bottom: "32px", right: "32px" }}
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
    </div>
  );
}

export default App;
