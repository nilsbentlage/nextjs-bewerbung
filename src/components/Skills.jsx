import React from "react";
import { Typography, Grid, Paper, LinearProgress } from "@material-ui/core";

function Skills() {
  const Skill = (props) => {
    return (
      <div className="skill">
        <Typography component="span">{props.name}</Typography>
        <LinearProgress
          value={parseInt(props.value)}
          variant="determinate"
          style={{ width: "5rem", height: ".5rem", borderRadius: "4px" }}
        />
      </div>
    );
  };

  return (
    <section id="skills">
      <Typography variant="h1">Skills</Typography>
      <Grid item container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={8} className="extraMargin">
            <Typography variant="h4">I'm a Designer</Typography>
            <Typography variant="h5">Print- & Webdesign</Typography>
            <Skill name="Photoshop" value="75" />
            <Skill name="Illustrator" value="90" />
            <Skill name="InDesign" value="75" />
            <Skill name="After Effects" value="60" />
            <Skill name="Premiere" value="50" />
            <Typography variant="h5">3D Model & Render</Typography>
            <Skill name="Cinema4D" value="50" />
            <Skill name="Blender" value="25" />
            <Typography variant="h5">Audioproduktion</Typography>
            <Skill name="Ableton Live" value="90" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={8} m={8} className="extraMargin">
            <Typography variant="h4">I'm a Developer</Typography>
            <Typography variant="h5">Web-Entwicklung</Typography>
            <Skill name="HTML 5" value="75" />
            <Skill name="CSS 3" value="75" />
            <Skill name="JavaScript" value="50" />
            <Skill name="PHP" value="25" />
            <Skill name="React" value="60" />
            <Skill name="SVG" value="75" />
            <Skill name="DevOps" value="25" />
            <Typography variant="h5">Prototyping</Typography>
            <Skill name="Adobe XD" value="75" />
            <Skill name="Figma" value="75" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={8} m={8} className="extraMargin">
            <Typography variant="h4">I'm Human</Typography>
            <Typography variant="h5">Softskills</Typography>
            <Skill name="Empathie" value="75" />
            <Skill name="Kommunikation" value="90" />
            <Skill name="Neugier" value="100" />
            <Skill name="Eigeninitiative" value="75" />
            <Typography variant="h5">Hobbies</Typography>
            <Skill name="DJing und Musik" value="50" />
            <Skill name="Mountainbike" value="50" />
            <Skill name="Fotografie" value="90" />
            <Skill name="Gaming" value="75" />
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}

export default Skills;
