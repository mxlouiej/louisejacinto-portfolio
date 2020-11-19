import React from "react";
import { Avatar, Box, makeStyles } from "@material-ui/core";
import graduate from "../assets/img/graduate.jpg";

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Box>
        {/* src={graduate} */}
        <Avatar alt="Grad Photo" className={classes.photo} />
      </Box>
      <Box className="about-description">
        <h1 className={classes.heading}>A little about me</h1>
        <p>
          Hey, I'm Louise. I'm a recent Information Systems graduate from De La
          Salle - College of Saint Benilde. I've taken an interest in developing
          web application using ReactJS and mobile applications using React
          Native.
        </p>
        <p>Other programming languages that I am familiar with are:</p>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFF",
    backgroundColor: "#000051",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      //smallest
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      padding: "0 15vh",
    },
  },
  photo: {
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(30),
      width: theme.spacing(30),
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(35),
      width: theme.spacing(35),
    },
    [theme.breakpoints.up("lg")]: {
      height: theme.spacing(40),
      width: theme.spacing(40),
    },
  },
  heading: {
    fontFamily: "Alegreya, serif",
    textTransform: "uppercase",
  },
}));

export default About;
