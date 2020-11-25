import React, { useState } from "react";
import { Box, makeStyles, Tooltip, Link } from "@material-ui/core";
import Tada from "react-reveal/Tada";

import GitHubIcon from "@material-ui/icons/GitHub";
// import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = () => {
  const contactStyles = useStyles();
  const [gitHub, setGitHub] = useState(false);
  // const [email, setEmail] = useState(false);
  const [linkedIn, setLinkedIn] = useState(false);

  const showGit = () => {
    setGitHub(!gitHub);
  };
  // const showEmail = () => {
  //   setEmail(!email);
  // };
  const showLinked = () => {
    setLinkedIn(!linkedIn);
  };

  // const copyEmail = (emailAdd) => {
  //   console.log(emailAdd);
  // };

  return (
    <Box className={contactStyles.contact}>
      {/* <h1 className={contactStyles.heading}>Contact Me</h1> */}
      <Box className={contactStyles.info}>
        <p>
          <span role="img" aria-label="round pushpin">
            📍
          </span>{" "}
          Caloocan, Philippines
        </p>
        <p>
          <span role="img" aria-label="e-mail">
            📧
          </span>{" "}
          mn.louisejacinto@gmail.com
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
        {/* <Tada spy={email}>
          <Tooltip title="Copy my E-mail">
            <AlternateEmailIcon
              style={{ fontSize: "10vh", color: "#EA4335" }}
              onMouseEnter={() => showEmail()}
              onClick={() => {
                copyEmail("mn.louisejacinto@gmail.com");
              }}
            />
          </Tooltip>
        </Tada> */}
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
    // color: "",
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
    fontSize: "30px",
  },
  iconBox: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "50%",
    flexWrap: "wrap",
    // borderRadius: "35px",
    // // backgroundColor: '#ffd0d094'
    // boxShadow: "-1px 6px 7px 0px #7b7474",
    padding: "2vh 0",
  },
}));

export default Contact;
