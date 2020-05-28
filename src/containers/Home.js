import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import 'typeface-roboto';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 275,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },

});

const btnStyle = {
  margin: "1em",
  padding: "1.5em",
}

export default function Home(props) {
  const classes = useStyles;

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <iframe height="250" width="350" src={video} align="right" title="video"></iframe>
      <Typography className={classes.title}>
        Choose your ailment to learn which foods naturally comfort and creative ways to add them to things you may already eat.
      </Typography>
      <Link to="/chooser">
        <Button
          variant="contained"
          color="primary"
          name="ailments"
          type="button"
          style={btnStyle}

        >
          What ails you?
      </Button>
      </Link>
      <Typography className={classes.title}>
        Select below to go straight to ingredients.
        </Typography>
      <Link to="/foodChooser">
        <Button
          variant="contained"
          color="primary"
          name="foods"
          type="button"
          style={btnStyle}
        >
          Look for ingredients
      </Button>
      </Link>
      <Typography className={classes.title}>
        Select below to learn more about nutrients and how they contribute.
      </Typography>
      <Link to="/nutrients">
        <Button
          variant="contained"
          color="primary"
          name="nutrients"
          type="button"
          style={btnStyle}
        >
          Learn about nutrients?
      </Button>
      </Link>

    </div >
  );
};
