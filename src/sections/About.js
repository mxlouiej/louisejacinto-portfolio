import React from "react";
import { Avatar, Box, makeStyles } from "@material-ui/core";
import graduate from "../assets/img/graduate.jpg";

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Box className="about-photo">
        {/* src={graduate} */}
        <Avatar alt="Grad Photo" className={classes.photo} />
      </Box>
      <Box className="about-description">
        <h2>A little about me</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          {/* Hey, I'm Louise. I'm a recent Information Systems graduate from De La
          Salle - College of Saint Benilde. */}
        </p>
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
      backgroundColor: "red",
      flexDirection: "column",
      //smallest
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "blue",
      flexDirection: "column",
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "green",
      flexDirection: "row",
      padding: "0 15vh",
    },
  },
  photo: {
    alignSelf: "center",
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
}));

export default About;
