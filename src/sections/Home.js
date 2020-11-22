import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const Home = () => {
  const homeStyles = useStyles();
  return (
    <Box className={homeStyles.landing}>
      <h1 className="home-text">Well, hello there!</h1>
      <p className="subtitle">
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
}));

export default Home;
