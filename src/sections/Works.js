import React from "react";
import { Avatar, Box, makeStyles } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import qrIcon from "../assets/img/qrIcon.png";
import qrHome from "../assets/img/qrHome.jpg";
import qrCode from "../assets/img/qrCode.jpg";
import partake from "../assets/img/partake.png";
import partakeIcon from "../assets/img/partakeIcon.png";
import partakeLogin from "../assets/img/partakeLogin.jpg";

const Works = () => {
  const workStyles = useStyles();
  return (
    <Box className={workStyles.works}>
      <h1 className={workStyles.heading}>Works</h1>

      <Fade bottom cascade>
        <Box className={workStyles.entryBox}>
          <h2 className={workStyles.projectTitle}>Partake</h2>
          <Box className={workStyles.details}>
            <Box fontStyle="oblique" className={workStyles.images}>
              <Box>
                <Avatar
                  variant="rounded"
                  alt="Partake Icon"
                  src={partakeIcon}
                  className={workStyles.icon}
                />
                <p>Partake Icon</p>
              </Box>
              <Box>
                <Avatar
                  variant="rounded"
                  alt="Partake mobile"
                  src={partakeLogin}
                  className={workStyles.screenshot}
                />
                <p>Mobile App Login Screen</p>
              </Box>
              <Box>
                <Avatar
                  variant="rounded"
                  alt="Partake website"
                  src={partake}
                  className={workStyles.partakePhoto}
                />
                <p>Website Login Page</p>
              </Box>
            </Box>

            <Box className={workStyles.description}>
              <p>
                Partake is our thesis project with the web front end made is
                React. The mobile front end is React Native. The back end uses
                Nodejs with MongoDB as its database. It is an application for
                both volunteers and organizations in the Philippines.
              </p>
              <p>
                The web application is primarily for organizations to create
                their events and keep track of the details. There is also a
                mobile application for the volunteers where they can browse
                through the volunteer opportunities and join the events they are
                interested in.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className={workStyles.entryBox}>
          {/*qr box */}
          <h2 className={workStyles.projectTitle}>Contact Tracing App</h2>
          <Box className={workStyles.details}>
            <Box fontStyle="oblique" className={workStyles.images}>
              <Box>
                <Avatar
                  variant="rounded"
                  alt="App Icon"
                  src={qrIcon}
                  className={workStyles.icon}
                />
                <p>App Icon</p>
              </Box>

              <Box>
                <Avatar
                  variant="rounded"
                  alt="App home"
                  src={qrHome}
                  className={workStyles.screenshot}
                />
                <p>App Home Screen</p>
              </Box>

              <Box>
                <Avatar
                  variant="rounded"
                  alt="App code"
                  src={qrCode}
                  className={workStyles.screenshot}
                />
                <p>App Result Screen</p>
              </Box>
            </Box>
            <Box className={workStyles.description}>
              <p>
                This is a React Native app that was requested by a client for
                their compound. The app creates a QR Code for the employee which
                contains details of their entry. It is to keep track of the
                people going inside the premises. The information from the QR
                Code is in JSON format.
              </p>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  works: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    color: "#403f3f",
    backgroundColor: "white",

    [theme.breakpoints.down("sm")]: {
      //smallest
    },
    [theme.breakpoints.up("md")]: {
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      //largest
    },
  },
  heading: {
    fontSize: "65px",
    margin: "0",
    fontFamily: "Castoro",
  },
  projectTitle: {
    fontSize: "35px",
    marginBottom: "0",
    textDecoration: "overline",
    textTransform: "lowercase",
  },
  screenshot: {
    boxShadow: "5px 10px 6px #888888",
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(65),
      width: theme.spacing(30),
      //smallest
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(40),
      width: theme.spacing(20),
      marginLeft: "1.5vw",
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      height: theme.spacing(50),
      width: theme.spacing(30),
      marginLeft: "2vw",
    },
  },
  partakePhoto: {
    boxShadow: "5px 10px 6px #888888",
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(50),
      width: theme.spacing(65),
      //smallest
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(40),
      width: theme.spacing(65),
      marginLeft: "1.5vw",
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      height: theme.spacing(50),
      width: theme.spacing(90),
      marginLeft: "2vw",
    },
  },
  icon: {
    boxShadow: "5px 10px 6px #888888",
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(30),
      width: theme.spacing(30),

      //smallest
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(40),
      width: theme.spacing(40),
      // medium,
    },
    [theme.breakpoints.up("lg")]: {
      height: theme.spacing(50),
      width: theme.spacing(50),
    },
  },
  entryBox: {
    marginBottom: "5vh",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      //smallest
      flexDirection: "column-reverse",
    },
  },
  description: {
    textAlign: "justify",
    margin: "0 15vw",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      //smallest
      fontSize: "18px",
    },
  },
  images: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",

    [theme.breakpoints.down("sm")]: {
      //smallest
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
}));

export default Works;
