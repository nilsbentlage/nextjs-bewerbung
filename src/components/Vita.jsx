import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";

const VitaItem = (props) => {
  return (
    <Grid item container xs={12} alignItems="center" className="vita-table-row">
      <Grid item xs={12} md={2}>
          <Typography align="center" style={{ lineHeight: "100%" }}>
            {props.type}
          </Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography>{props.position}</Typography>
        <Typography variant="caption">{props.company}</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
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
            <Typography variant="h5">Jobs & Training</Typography>
          </Grid>
          <VitaItem
            type="Employement"
            company="symmedia GmbH, Bielefeld"
            position="Graphics design, UI/UX"
            time="August 2017 – today"
          />
          <VitaItem
            type="Studies"
            company="Univsersität Bielefeld, Bielefeld"
            position="Combined Bachelor: Sociology & Politics (unfinished)"
            time="October 2013 – September 2018"
          />
          <VitaItem
            type="School"
            company="Westfalen-Kolleg Bielefeld, Bielefeld"
            position="Allgemeine Hochschulreife"
            time="October 2010 – May 2013"
          />
          <VitaItem
            type="Civilian Service"
            company="Stadtverwaltung im Rathaus, Borgholzhausen"
            position="Facility Service"
            time="January 2010 – October 2010"
          />
          <VitaItem
            type="Employment"
            company="Kolbe-Coloco GmbH, Versmold"
            position="Media designer for digital and print media"
            time="September 2009 – October 2009"
          />
          <VitaItem
            type="Apprenticeship"
            company="Kolbe-Coloco GmbH, Versmold"
            position="Media designer for digital and print media"
            time="September 2006 – August 2009"
          />
        </Paper>
        <Paper elevation={8} className="vitaSection">
          <Grid item xs={12}>
            <Typography variant="h5">Self-Employed</Typography>
          </Grid>
          <VitaItem
            type="Business"
            company="nulectric Records, Bielefeld"
            position="Graphics & Webdesign, CEO"
            time="August 2018 – today"
          />
          <VitaItem
            type="Temporary Staff"
            company="symmedia GmbH, Bielefeld"
            position="Media designer for digital and print media"
            time="October 2015 – August 2017"
          />
          <VitaItem
            type="Business"
            company="Nils Bentlage Mediendienstleistungen, Bielefeld"
            position="Graphics & Webdesign, CEO"
            time="September 2009 – today"
          />
          <VitaItem
            type="Fee Based"
            company="symmedia GmbH, Bielefeld"
            position="Freelance Journalist"
            time="September 2009 – August 2014"
          />
        </Paper>
      </Grid>
    </section>
  );
}

export default Vita;
