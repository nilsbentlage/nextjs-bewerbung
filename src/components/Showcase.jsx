import React from "react";
import { Typography, Grid, Paper, Button, ButtonGroup } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import knotenpunkt from "./images/knotenpunkt.png";
import nulectric from "./images/nulectric.png";
import holtex from "./images/holtex.png";
import djskins from "./images/djskins.png";
import corona from "./images/corona.png";
import beercount from "./images/beercount.png";
import elepfandten from "./images/elepfandten.png";

const devItems = {
  content: "dev",
  items: [
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
  ].sort(() => Math.random() - 0.5),
};

import puwbox from "./images/puwbox.png";
import camPhoto from "./images/camPhoto.png";
import keyvisual from "./images/keyvisual.png";
import monitoring from "./images/monitoring.png";
import projektVerlauf from "./images/projektverlauf.png";
import retrosmart from "./images/retrosmart.png";
import sp1c from "./images/spic.png";

const designItems = {
  content: "design",
  items: [
    {
      name: "3D-Modellierung & Rendering",
      description:
        "Die symmedia Hardware-Produkte wurden von mir in Cinema4D modelliert und gerendert.",
      img: puwbox,
    },
    {
      name: "Produktfotografie",
      description:
        "Mit einer Sony Alpha 6000 fotografiert, ausgeleuchtet und retuschiert.",
      img: camPhoto,
    },
    {
      name: "Key-Visual Factory-Portal",
      description:
        "Zusammen mit meiner Abteilung habe ich das Key-Visual für das Factory-Portal entwickelt.",
      img: keyvisual,
    },
    {
      name: "Key-Visual 'Monitoring'",
      description:
        "Aus einer 3D-Datei habe ich mit Photoshop ein Key-Visual für die symmedia Monitoring-App erstellt.",
      img: monitoring,
    },
    {
      name: "Grafik: Agiler Projektverlauf",
      description:
        "Für die symmedia-Website habe ich eine Grafik erstellt, die den Projektverlauf bei Agilen Projekten erklärt.",
      img: projektVerlauf,
    },
    {
      name: "Grafik: Retrosmart",
      description:
        "Als externe Arbeit habe ich eine Grafik für einen Retrosmart-Produkt erstellt.",
      img: retrosmart,
    },
    {
      name: "SP1C - symmedia Portal One Click Designer",
      description:
        "Leider habe ich keinen Zugriff mehr auf das Produkt, aber das Tool 'SP1C' war eine meiner wichtigsten Aufgaben bei symmedia.",
      img: sp1c,
    },
  ].sort(() => Math.random() - 0.5),
};

const Item = (props) => {
  return (
    <div className="showCaseDiv">
      <img src={props.item.img} />
      <div className="textContent">
        <Typography variant="h5">{props.item.name}</Typography>
        <Typography paragraph>{props.item.description}</Typography>
        <div>
          {props.item.url && (
            <Button
              color="primary"
              variant="contained"
              href={props.item.url}
              target="_blank"
              elevation={8}
            >
              Link
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

function Showcase() {
  let [visible, setVisible] = React.useState(devItems);

  return (
    <section id="showcase">
      <Typography variant="h1">Showcase</Typography>
      <Grid item xs={12}>
        <Paper elevation={8} className="showCaseCard">
          <ButtonGroup
            size="small"
            sx={{
              position: "absolute",
              top: "0",
              translate: "0 -50%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              className={visible.content !== "dev" ? "inactive" : ""}
              onClick={() => setVisible(devItems)}
              sx={{ paddingInline: "1rem" }}
            >
              Web-Development
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={visible.content !== "design" ? "inactive" : ""}
              onClick={() => setVisible(designItems)}
              sx={{ paddingInline: "1rem" }}
            >
              Design
            </Button>
          </ButtonGroup>
          <Carousel
            navButtonsAlwaysVisible={false}
            interval="5000"
            swipe={true}
            pauseOnHover={true}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#ff9800",
              },
            }}
          >
            {visible.items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Carousel>
        </Paper>
      </Grid>
    </section>
  );
}

export default Showcase;
