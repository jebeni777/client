import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import 'typeface-roboto';
import { ReactTinyLink } from 'react-tiny-link';

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
    fontSize: 36,
    fontWeight: "bold",
    paddingLeft: "3em",
  },
  pos: {
    marginBottom: 12,
  },
  bod1: {
    marginLeft: 12,
  }

});

const btnStyle = {
  margin: "1em",
  padding: "1.5em",
  fontWeight: "bold",
}

export default function Home(props) {
  const classes = useStyles;

  return (
    <Grid
      container
      // direction="column"
      justify="left"
    >
      <Grid item xs={12} sm={6} >
        <Card style={{ margin: "1em", padding: "1em", backgroundColor: "#533e2d", color: "white" }}>
          <Typography variant="h5" >How do you feel?</Typography>
        </Card>
        <Card style={{ margin: "1em", padding: "1em", marginTop: "1em", }}>
          <Typography className={classes.bod1} variant="body1">
            Foods can naturally comfort us because we are what we eat. And most of us don't want to change our diets. What if you were shown a way to add ingredients that would help your ailments to what you already eat? Choose your ailment to learn which foods naturally comfort and creative ways to add them to things you may already eat.
          </Typography>
        </Card>
        <Link to="/chooser" style={{ textDecoration: 'none' }} >
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
        <Link to="/foodChooser" style={{ textDecoration: 'none' }} >
          <Button
            variant="contained"
            color="primary"
            name="foods"
            type="button"
            style={btnStyle}
          >
            Ingredients
        </Button>
        </Link>
        <Link to="/nutrients" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            name="nutrients"
            type="button"
            style={btnStyle}
          >
            Nutrients
            </Button>
        </Link>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <iframe height="310" width="410" src={video} align="right" title="video"></iframe>
      </Grid> */}

      <Grid item xs={12} sm={6}>
        <Card style={{ margin: "1em", padding: "1em", backgroundColor: "#533e2d", color: "white" }}>
          <Typography variant="h5">More helpful information</Typography>
        </Card>
        <div style={{ marginLeft: 14, marginTop: 20 }}>
          {/* <Typography className={classes.title}>More helpful information</Typography> */}
          <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url="https://stantonmigraineprotocol.com/"
          />
          <br />
          <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url="https://www.youtube.com/watch?v=wYRZGFFYqWo"
          />
          <br />
          <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url="https://societyhealth.org/top-joint-health-supplement-guide/?gclid=EAIaIQobChMIxrrJ9JD_5wIVQh6tBh2Q2QQBEAAYAiAAEgIwMfD_BwE"
          />
        </div>
      </Grid>
    </Grid>

  );
};
