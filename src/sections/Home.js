import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const Home = () => {
  const homeStyles = useStyles();
  return (
    <Box className={homeStyles.landing}>
      <h1 className={homeStyles.homeText}>Well, hello there!</h1>
      <p className={homeStyles.subtitle}>
        Go swipe right (or use right arrow key) to view my portfolio 👉👉👉
      </p>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  landing: {
    display: "flex",
    padding: "0 8vw",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    color: "#FFFF",
    backgroundColor: "#5C068C",
  },
  homeText: {
    fontSize: "100px",
    textAlign: "right",
    alignSelf: "center",
    fontFamily: "Alegreya, serif",
    textShadow: "12px 7px #3f0361",
    marginBottom: "0",
  },
  subtitle: {
    color: "#ababab",

    [theme.breakpoints.down("sm")]: {
      //smallest
      textAlign: "right",
    },
  },
}));

export default Home;
