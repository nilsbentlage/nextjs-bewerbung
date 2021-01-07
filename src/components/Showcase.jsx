import React from "react";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import knotenpunkt from "./images/knotenpunkt.png";
import nulectric from "./images/nulectric.png";
import holtex from "./images/holtex.png";
import greeninc from "./images/greeninc.png";
import sp1c from "./images/sp1c.png";
import beercount from "./images/beercount.png";

const items = [
  {
    name: "Knotenpunkt e.V.",
    description:
      "Die neue Web-Präsenz des Vereins Knotenpunkt e.V. basiert auf Wordpress und geht in wenigen Wochen online.",
    img: knotenpunkt,
    url: "https://wordpress.knotenpunkt-bielefeld.de"
  },
  {
    name: "nulectric Records",
    description:
      "Die Website zum eigenen Musik-Label wurde mit Adobe Muse und einigen manuellen Erweiterungen umgesetzt.",
    img: nulectric,
    url: "http://www.nulectricrecords.com"
  },
  {
    name: "hol-tex.de",
    description:
      "Einer meiner größeren Kunden hat im Jahr 2015 eine neue Website auf Wordpress-Basis bekommen.",
    img: holtex,
    url: "https://hol-tex.de"
  },
  {
    name: "Green Inc.",
    description:
      "Ein VPS mit TS-Server, Nextcloud und einem schlanken Frontend, das ich mit dem Flat-File CMS »GRAV« umgesetzt habe.",
    img: greeninc,
    url: "http://www.greeninc.ga"
  },
  {
    name: "SP/1C",
    description:
      "Meine erste Web-App dient der Erstellung von Software-Themes und ist seit 2017 auch produktiv im Einsatz.",
    img: sp1c,
    url: "http://dev.greeninc.ga/material"
  },
  {
    name: "BeerCount",
    description:
      "Ein digitaler Bierdeckel als PWA. Basiert auf der React-Library und nutzt Google Firebase als Backend.",
    img: beercount,
    url: "https://beercount-2.web.app"
  },
];

const Item = (props) => {
  return (
    <div>
      <Typography variant="h5">{props.item.name}</Typography>
      <p>{props.item.description}</p>
      {/* <img src={props.item.img} loading="lazy" alt="Knotenpunkt e.V." width="100%" /> */}
      <div
        className="showCaseDiv"
        style={{ backgroundImage: "url(" + props.item.img + ")" }}
      >
        {props.item.url && (
          <Button color="primary" variant="contained" href={props.item.url} target="_blank">
            Check it out!
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
        <Paper
          elevation={8}
          className="showCaseCard"
          style={{ transition: "height 0.5s ease-in-out" }}
        >
          <Carousel autoPlay={false} animation="slide" indicators={false}>
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
