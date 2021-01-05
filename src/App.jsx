import React from "react";

import Grid from "@material-ui/core/Grid";

import Splash from "./components/Splash";
import Skills from "./components/Skills";
import Vita from "./components/Vita";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

function App() {
  return (
    <Grid container>
      <Grid item xs={10} sm={8}>
        <Splash />
        <Skills />
        <Vita />
        <Showcase />
        <Contact />
      </Grid>
      <Grid item container xs={2} sm={4}>
        <Menu />
      </Grid>
    </Grid>
  );
}

export default App;
