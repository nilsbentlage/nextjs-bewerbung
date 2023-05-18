import React from "react";
import { Typography, Grid, Paper, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import knotenpunkt from "./images/knotenpunkt.png";
import nulectric from "./images/nulectric.png";
import holtex from "./images/holtex.png";
import djskins from "./images/djskins.png";
import corona from "./images/corona.png";
import beercount from "./images/beercount.png";
import elepfandten from "./images/elepfandten.png";

const items = [
  {
    name: "Knotenpunkt e.V.",
    description:
      "Die neue Web-Präsenz des Vereins Knotenpunkt e.V. basiert auf Wordpress und geht in wenigen Wochen online.",
    img: knotenpunkt,
    url: "https://wordpress.knotenpunkt-bielefeld.de",
  },
  {
    name: "nulectric Records",
    description:
      "Die Website zum eigenen Musik-Label wurde mit Adobe Muse und einigen manuellen Erweiterungen umgesetzt.",
    img: nulectric,
    url: "http://www.nulectricrecords.com",
  },
  {
    name: "hol-tex.de",
    description:
      "Einer meiner größeren Kunden hat im Jahr 2015 eine neue Website auf Wordpress-Basis bekommen.",
    img: holtex,
    url: "https://hol-tex.de",
  },
  {
    name: "DJ-Skins.com | Editor",
    description:
      "Ein Produktkonfigurator für individuelle Skins für DJ-Equipment. Die App wurde mit Svelte umgesetzt.",
    img: djskins,
    url: "https://editor.dj-skins.com",
  },
  {
    name: "CCT - Casumer Corona Tracker",
    description:
      "Eine kleine Web-App, die die aktuellen Corona-Zahlen für nutzerdefinierte Landkreise anzeigt. Svelte und RKI-API",
    img: corona,
    url: "http://dev.nbmedia.net/coronatracker",
  },
  {
    name: "BeerCount",
    description:
      "Ein digitaler Bierdeckel als PWA. Basiert auf der React-Library und nutzt Google Firebase als Backend.",
    img: beercount,
    url: "https://beercount-2.web.app",
  },
  {
    name: "Elepfandten.de",
    description:
      "Eine App mit gemeinnützigem Charakter, die das Spenden und Sammeln von Pfandflaschen vereinfacht. React, Ionic und Firebase (WIP).",
    img: elepfandten,
    url: "https://www.elepfandten.de",
  },
].sort(() => Math.random() - 0.5);

const Item = (props) => {
  return (
    <div>
      <Typography variant="h5">{props.item.name}</Typography>
      <Typography paragraph>{props.item.description}</Typography>
      <div
        className="showCaseDiv"
        style={{ backgroundImage: "url(" + props.item.img + ")" }}
      >
        {props.item.url && (
          <Button
            color="primary"
            variant="contained"
            href={props.item.url}
            target="_blank"
            elevation={8}
          >
            Go to the Website!
          </Button>
        )}
      </div>
    </div>
  );
};

function Showcase() {
  return (
    <section id="showcase">
      <Typography variant="h1">Showcase</Typography>
      <Grid item xs={12}>
        <Paper elevation={8} className="showCaseCard">
          <Carousel
            navButtonsAlwaysVisible={true}
            interval="8000"
            activeIndicatorIconButtonProps={{
              style: {
                color: "#f5a900", // 2
              },
            }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Paper>
      </Grid>
    </section>
  );
}

export default Showcase;
