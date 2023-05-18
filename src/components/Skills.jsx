import React from "react";
import { Typography, Grid, Paper, LinearProgress, Chip } from "@mui/material";

function Skills() {
  const Skill = (props) => {
    return (
      <div className="skill">
        <Typography component="span">{props.name}</Typography>
        <LinearProgress
          value={parseInt(props.value) * 20}
          variant="determinate"
          style={{ width: "5rem", height: ".5rem", borderRadius: "4px" }}
        />
      </div>
    );
  };
  const Tool = (props) => {
    return <Chip label={props.children} size="small" sx={{ margin: 0.251 }} />;
  };

  return (
    <section id="skills">
      <Typography variant="h1">Skills</Typography>
      <Grid item container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={8} className="extraMargin">
            <Typography variant="h4">I'm a Designer</Typography>
            <Typography variant="h5">Print- & Webdesign</Typography>
            <Skill name="Photoshop" value="4" />
            <Skill name="Illustrator" value="4" />
            <Skill name="InDesign" value="3" />
            <Skill name="After Effects" value="4" />
            <Skill name="Premiere" value="3" />
            <Typography variant="h5">3D Model & Render</Typography>
            <Skill name="Cinema4D" value="3" />
            <Skill name="Blender" value="2" />
            <Typography variant="h5">Audioproduktion</Typography>
            <Skill name="Ableton Live" value="4" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={8} m={8} className="extraMargin">
            <Typography variant="h4">I'm a Developer</Typography>
            <Typography variant="h5">Web-Entwicklung</Typography>
            <Skill name="HTML 5 & CSS 3" value="5" />
            <Skill name="JavaScript" value="4" />
            <Skill name="PHP" value="2" />
            <Skill name="MySQL" value="1" />
            <div
              style={{
                display: "block",
                textAlign: "center",
                backgroundColor: "#4c4c4c",
                borderRadius: 8,
                marginTop: 8,
                paddingBlock: 4,
              }}
            >
              <Typography variant="body1">Lieblings-Tools</Typography>
              <Tool>NodeJS</Tool>
              <Tool>Docker</Tool>
              <Tool>Jenkins</Tool>
              <Tool>GitLab</Tool>
              <Tool>Wordpress</Tool>
              <Tool>Strapi</Tool>
              <Tool>React</Tool>
              <Tool>Vue</Tool>
              <Tool>Svelte</Tool>
              <Tool>Firebase</Tool>
              <Tool>Storybook</Tool>
            </div>
            <Typography variant="h5">Prototyping</Typography>
            <Skill name="Figma" value="4" />
            <Skill name="Adobe XD" value="2" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={8} m={8} className="extraMargin">
            <Typography variant="h4">I'm Human</Typography>
            <Typography variant="h5">Softskills</Typography>
            <Skill name="Empathie" value="4" />
            <Skill name="Kommunikation" value="4" />
            <Skill name="Lernbereitschaft" value="5" />
            <Skill name="Eigeninitiative" value="4" />
            <Typography variant="h5">Hobbies</Typography>
            <Skill name="DJing und Musik" value="2" />
            <Skill name="Mountainbike" value="3" />
            <Skill name="Fotografie" value="2" />
            <Skill name="Gaming" value="4" />
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}

export default Skills;
