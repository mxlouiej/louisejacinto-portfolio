import React from "react";
import { Avatar, Box, makeStyles } from "@material-ui/core";
import graduate from "../assets/img/graduate.jpg";
import tuan from "../assets/img/tuan.jpg";

const About = () => {
  const aboutStyles = useStyles();
  return (
    <>
      <Box className={aboutStyles.about}>
        <Box>
          {/* src={graduate} */}
          <Avatar alt="Grad Photo" className={aboutStyles.photo} />
        </Box>
        <Box className={aboutStyles.description}>
          <h1 className={aboutStyles.heading}>A little about me</h1>
          <p>
            Hey, I'm Louise. I'm a recent Information Systems graduate from De
            La Salle - College of Saint Benilde. I've taken an interest in
            developing web application using ReactJS and mobile applications
            using React Native.
          </p>
          <p>Other programming languages that I am familiar with are:</p>
          {/* add chart down here another box? */}
        </Box>
      </Box>
    </>
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
    background: `linear-gradient(
      rgba(0,0,0,0.6),
      rgb(0 0 0 / 71%) ) ,
      url(${tuan})`,

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
  description: {
    fontSize: "24px",
    margin: "0 5vh",
    textAlign: "justify",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      // medium,
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
