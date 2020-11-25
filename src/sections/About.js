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
          <Avatar
            alt="Grad Photo"
            src={graduate}
            className={aboutStyles.photo}
          />
        </Box>
        <Box className={aboutStyles.description}>
          <h1 className={aboutStyles.heading}>Louise Jacinto</h1>
          <p>
            I'm a recent Information Systems graduate from De La Salle - College
            of Saint Benilde. I've taken an interest in developing web
            application using ReactJS and mobile applications using React
            Native.
          </p>
          <p>
            Other than using HTML5, CSS, PHP, Java, MySQL, and JavaScript I also
            am experienced in using Nodejs and MongoDB.
          </p>
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
      paddingTop: "5vh",
      flexDirection: "column",
      //smallest
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      padding: "0 20vw",
    },
  },
  description: {
    fontSize: "24px",
    textAlign: "justify",

    [theme.breakpoints.down("sm")]: {
      margin: "0 20vw",
      fontSize: "18px",
      // medium,
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 25vw",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 5vw",
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
    fontFamily: "Castoro, serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      textAlign: "center",
      // medium,
    },
  },
}));

export default About;
