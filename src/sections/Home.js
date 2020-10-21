import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.landing}>
      <h1 className="home-text">Well, hello there!</h1>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  landing: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    color: "#FFFF",
    backgroundColor: "#005151",

    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "red", smallest
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "blue", medium
    },
    [theme.breakpoints.up("lg")]: {},
  },
}));

export default Home;
