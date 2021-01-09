import React from "react";
import { Typography, Grid } from "@material-ui/core";

function Splash() {
  return (
    <section id="home">
      <Grid item xs={12}>{" "}</Grid>
      <Grid item xs={12}>{" "}</Grid>
      <div>
        <Typography variant="h1">Nils Bentlage</Typography>
        <Typography variant="button">Graphics, UI / UX & Frontend</Typography>
      </div>
    </section>
  );
}

export default Splash;
