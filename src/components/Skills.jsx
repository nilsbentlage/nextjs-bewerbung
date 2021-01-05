import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";

function Skills() {
  const Skill = (props) => {
    return (
      <div className="skill">
        <Typography component="span">{props.name}</Typography>
        <progress value={props.value} max="100" style={{ width: "5rem" }} />
      </div>
    );
  };

  return (
    <section id="skills">
      <Typography variant="h1">Skills</Typography>
      <Grid item xs={12} container spacing={6} justify="center">
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={8} m={8} className="extraMargin">
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
            <Typography variant="h5">Web-Development</Typography>
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
            <Skill name="Empathy" value="75" />
            <Skill name="Communication" value="90" />
            <Skill name="Curiosity" value="100" />
            <Skill name="Initiative" value="75" />
            <Typography variant="h5">Hobbies</Typography>
            <Skill name="DJing and Music" value="50" />
            <Skill name="Mountainbike" value="50" />
            <Skill name="JavaScript" value="50" />
            <Skill name="Photography" value="90" />
            <Skill name="Gaming" value="75" />
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}

export default Skills;
