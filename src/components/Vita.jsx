import React from "react";
import { Typography, Grid, Paper, Box, Hidden } from "@mui/material";

const VitaItem = (props) => {
  return (
    <Grid
      item 
      container
      xs={12}
      alignItems="center"
      className="vita-table-row"
      justifyContent="flex-start"
    >
      <Hidden smDown>
        <Grid item xs={12} md={2}>
          <Typography align="center">{props.type}</Typography>
        </Grid>
      </Hidden>
      <Grid item xs={12} md={7} order={{ xs: 2, sm: 2 }}>
        <Typography sx={{ textAlign: { xs: "center", sm: "left" } }}>
          {props.position}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          {props.company}
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} order={{ xs: 1, sm: 3 }}>
        <Typography align="center">{props.time}</Typography>
      </Grid>
    </Grid>
  );
};

function Vita() {
  return (
    <section id="vita">
      <Typography variant="h1">Vita</Typography>
      <Grid item container>
        <Paper elevation={8} className="vitaSection">
          <Grid item xs={12}>
            <Typography variant="h5">Beruf und Ausbildung</Typography>
          </Grid>
          <VitaItem
            type="Anstellung"
            company=".comspace GmbH, Bielefeld"
            position="Frontend-Entwickler"
            time="April 2021 – heute"
          />
          <VitaItem
            type="Anstellung"
            company="symmedia GmbH, Bielefeld"
            position="Grafikdesign, UI/UX"
            time="August 2017 – März 2021"
          />
          <VitaItem
            type="Studium"
            company="Univsersität Bielefeld, Bielefeld"
            position="Kombi-BA: Soziologie & Politikwissenschaften (ohne Abschluss)"
            time="Oktober 2013 – September 2018"
          />
          <VitaItem
            type="Schule"
            company="Westfalen-Kolleg Bielefeld, Bielefeld"
            position="Allgemeine Hochschulreife"
            time="Oktober 2010 – Mai 2013"
          />
          <VitaItem
            type="Zivildienst"
            company="Stadtverwaltung im Rathaus, Borgholzhausen"
            position="Facility Service"
            time="Januar 2010 – Oktober 2010"
          />
          <VitaItem
            type="Anstellung"
            company="Kolbe-Coloco GmbH, Versmold"
            position="Mediengestalter für Digital- und Printmedien"
            time="September 2009 – Oktober 2009"
          />
          <VitaItem
            type="Ausbildung"
            company="Kolbe-Coloco GmbH, Versmold"
            position="Mediengestalter für Digital- und Printmedien"
            time="September 2006 – August 2009"
          />
        </Paper>
        <Paper elevation={8} className="vitaSection">
          <Grid item xs={12}>
            <Typography variant="h5">Selbstständig</Typography>
          </Grid>
          <VitaItem
            type="Kleingewerbe"
            company="nulectric Records, Bielefeld"
            position="Graphics & Webdesign, CEO"
            time="August 2018 – heute"
          />
          <VitaItem
            type="Aushilfe"
            company="symmedia GmbH, Bielefeld"
            position="Mediengestalter für Digital- und Printmedien"
            time="Oktober 2015 – August 2017"
          />
          <VitaItem
            type="Kleingewerbe"
            company="Nils Bentlage Mediendienstleistungen, Bielefeld"
            position="Graphics & Webdesign, CEO"
            time="September 2009 – heute"
          />
          <VitaItem
            type="Aushilfe"
            company="Haller Kresiblatt GmbH, Halle Westf."
            position="Freischaffender Journalist"
            time="September 2009 – August 2014"
          />
        </Paper>
      </Grid>
    </section>
  );
}

export default Vita;
