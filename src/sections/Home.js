import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Jump from "react-reveal/Jump";

const Home = () => {
  const homeStyles = useStyles();
  return (
    <Box className={homeStyles.landing}>
      <Jump forever={true}>
        <h1 className={homeStyles.homeText}>Hello there!</h1>
      </Jump>
      <p className={homeStyles.subtitle}>
        Go swipe right (or use right arrow key) to view my portfolio{" "}
        <span role="img" aria-label="backhand index pointing right">
          👉👉👉
        </span>
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
    fontFamily: "Castoro, serif",
    textShadow: "12px 7px #3f0361",
    marginBottom: "0",
  },
  subtitle: {
    fontFamily: "Lato, sans-serif",
    color: "#ababab",

    [theme.breakpoints.down("sm")]: {
      //smallest
      textAlign: "right",
    },
  },
}));

export default Home;
