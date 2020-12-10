import React, { useState } from "react";
import { Box, makeStyles, Tooltip, Link, Avatar } from "@material-ui/core";
import Tada from "react-reveal/Tada";

import logo from "../assets/img/tilted logo.png";

import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = () => {
  const contactStyles = useStyles();
  const [gitHub, setGitHub] = useState(false);
  const [email, setEmail] = useState(false);
  const [eTooltip, setEToolTip] = useState("Copy Email to Clipboard");
  const [linkedIn, setLinkedIn] = useState(false);

  const showGit = () => {
    setGitHub(!gitHub);
  };
  const showEmail = () => {
    setEmail(!email);
  };
  const showLinked = () => {
    setLinkedIn(!linkedIn);
  };

  const copyEmail = (emailAdd) => {
    navigator.clipboard.writeText(emailAdd);
    setEToolTip("Email Copied!");
  };

  return (
    <Box className={contactStyles.contact}>
      <Avatar
        variant="rounded"
        alt="Louise Jacinto Logo"
        className={contactStyles.logo}
        src={logo}
      />
      <Box className={contactStyles.info}>
        <p>
          <span role="img" aria-label="round pushpin">
            📍
          </span>{" "}
          Caloocan, Philippines
        </p>
      </Box>

      <Box className={contactStyles.iconBox}>
        <Tada spy={gitHub}>
          <Tooltip title="Redirect to Github Page">
            <Link href="https://github.com/mxlouiej">
              <GitHubIcon
                style={{ fontSize: "10vh", color: "#24292E" }}
                onMouseEnter={() => showGit()}
              />
            </Link>
          </Tooltip>
        </Tada>
        <Tada spy={email}>
          <Tooltip title={eTooltip}>
            <AlternateEmailIcon
              style={{ fontSize: "10vh", color: "#EA4335" }}
              onMouseEnter={() => showEmail()}
              onClick={() => {
                copyEmail("mn.louisejacinto@gmail.com");
              }}
            />
          </Tooltip>
        </Tada>
        <Tada spy={linkedIn}>
          <Tooltip title="Redirect to LinkedIn Profile">
            <Link href="https://www.linkedin.com/in/louise-jacinto">
              <LinkedInIcon
                style={{ fontSize: "10vh", color: "#0A66C2" }}
                onMouseEnter={() => showLinked()}
              />
            </Link>
          </Tooltip>
        </Tada>
      </Box>
      <p>&copy; Louise Jacinto | Portfolio created using React</p>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  contact: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5rem",
      //smallest
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 20rem",
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 35rem",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(25),
      width: theme.spacing(25),
      //smallest
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(30),
      width: theme.spacing(30),
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      height: theme.spacing(40),
      width: theme.spacing(40),
    },
  },
  heading: {
    fontSize: "65px",
    margin: "0",
    fontFamily: "Castoro",
    fontWeight: "lighter",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      //smallest
    },
  },
  info: {
    // color: "white",
    color: "#403f3f",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      padding: "0 10px",
      //smallest
    },
  },
  iconBox: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    flexWrap: "wrap",
    padding: "2vh 0",
  },
}));

export default Contact;
