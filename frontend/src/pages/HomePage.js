import React from "react";

import { Timeline } from "react-twitter-widgets";

import {
  Typography,
  Box,
  makeStyles,
  Paper,
  Button,
  CardContent,
  CardActions,
  useMediaQuery,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import { Map, Partners } from "../addons";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "16px",
    padding: "16px 8px",
    flex: "1 1 0px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      padding: "4px",
    },
  },
  welcomeTop: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  map: {
    flexGrow: 1,
    width: "100%",
  },
  message: {
    flexGrow: 1,
    maxWidth: "500px",
    padding: "16px",
    marginBottom: "32px",

    [theme.breakpoints.down("sm")]: {
      padding: "4px",
      margin: "16px",
    },
  },
  right: {
    justifyContent: "right",
  },

  center: {
    justifyContent: "center",
  },
  callToAction: {
    textDecoration: "none",
  },
}));
const HomePage = () => {
  const classes = useStyles();
  const xs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  return (
    <Paper className={classes.root}>
      <div className={classes.welcomeTop}>
        <Box className={classes.message}>
          <CardContent>
            <Typography variant="h5" color="primary">
              Faciliter la pratique de la classe dehors et l’apprentissage
              dehors pour les acteurs de l’éducation.
            </Typography>
          </CardContent>
          <CardActions className={classes.right}>
            <Link
              to="/Page/https%3A%2F%2Fdata.classe-dehors.org%2Fpages%2Fmanifeste"
              className={classes.callToAction}
            >
              <Button color="primary" variant="contained">
                Voir le manifeste
              </Button>
            </Link>
          </CardActions>
        </Box>
        <Box className={classes.map}>
          <Map height={xs ? 200 : 500} />
          <CardActions className={classes.center}>
            <Link to="/Person/create" className={classes.callToAction}>
              <Button color="primary" variant="contained">
                Rejoindre la communauté
              </Button>
            </Link>
          </CardActions>
        </Box>
      </div>
      <Typography variant="h5" color="primary">
        Infolettre
      </Typography>
      <iframe
        title="infolettre"
        width="1000"
        height="400"
        src="https://7bfa4c43.sibforms.com/serve/MUIEAHYvGpV_Uq7aX2JfH9-JZYypekWGNAJmVNR0oRy4HvJC3S2qGjv7EqY1bawDuT0j3TRy2-TIS1gVhEGl4yemzRvzkZYz8KIk9jw4QJKWXNssBjIL_29pFK4gjzqeYf_F9EKpocV2TTqetmyCHNE24S969k4OqZNfESprgr2-aWd1_IWF8fOAb7gqhHg_hZ1EMZ4Yx_WgEyt_"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
        }}
      ></iframe>
      <Typography variant="h5" color="primary">
        Coalition
      </Typography>
      <Partners />
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "ClasseDehors",
        }}
        options={{
          width: "300",
          height: "500",
        }}
      />{" "}
    </Paper>
  );
};

export default HomePage;
