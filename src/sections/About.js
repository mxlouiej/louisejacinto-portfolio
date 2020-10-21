import React from "react";
import { Avatar, Box, makeStyles } from "@material-ui/core";
import graduate from "../assets/img/graduate.jpg";

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <h1 className="about-text">Call me Louise</h1>
      <Box className="about-container">
        <Box className="description">{/* description here */}</Box>

        <Box className="about-photo">
          <Avatar alt="Grad Photo" src={graduate} className={classes.photo} />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#FFFF",
    backgroundColor: "#000051",
    paddingBottom: "2vh",

    [theme.breakpoints.down("sm")]: {
      backgroundColor: "red",
      // smallest,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "blue",
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "green",
    },
  },
  photo: {
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(20),
      width: theme.spacing(20),
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(30),
      width: theme.spacing(30),
    },
    [theme.breakpoints.up("lg")]: {
      height: theme.spacing(40),
      width: theme.spacing(40),
    },
  },
}));

export default About;
