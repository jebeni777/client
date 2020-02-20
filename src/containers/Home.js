import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import categories from "../mock/categories";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";
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

function Home(props) {
  const classes = useStyles;
  // const myStyle = {
  //   border: "1px Solid Gray",
  //   listStyleType: "none",
  //   boxShadow: "2px 2px grey",
  //   marginBottom: "2em",
  //   padding: "1em",
  //   lineHeight: "1.5em"
  // }
  const btnStyle = {
    margin: "1em",
    padding: "1.5em",
  }

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <iframe height="250" width="350" src={video} align="right" title="video"></iframe>
      <Typography className={classes.title}>
        Choose your ailment to learn which foods naturally comfort.
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
        Select below to go straight to ingredients or recipes.
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
      <Link to="/recipe">
        <Button
          variant="contained"
          color="primary"
          name="recipe"
          type="button"
          style={btnStyle}
        >
          Jump to recipes
      </Button>
      </Link>
      <h5>
        Select below to learn more about nutrients and how they contribute.
      </h5>
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
      {/* <Card>
        <CardContent> */}

      {/* </CardContent>

      </Card>
      <Card>
        <CardContent>


        </CardContent>
      </Card> */}
      {/*<Card>
        <CardContent>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/Heart">Heart</Link>
            </li>
            <img src={heart} alt={heart} />
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/Lungs">Lungs</Link>
            </li>
            <img src={lungs} alt={lungs} />
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/Memory">Memory</Link>
            </li>
            <img src={memory} alt={memory} />
          </ul>
        </CardContent>
      </Card >
      <Card>
        <CardContent>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/Stomach">Stomach</Link>
            </li>
            <img src={stomach} alt={stomach} />
          </ul>
        </CardContent>
      </Card > */}
      {/* <li>
              <Link to="/Bones">Bones</Link>

            </li>
            <li>
              <Link to="/">Nutrients</Link>
            </li>
            <li>
              <Link to="/">Ingredients</Link>
            </li>
            <li>
              <Link to="/">Recipes</Link>
            </li> */}

    </div >
  );
};

const mapStateToProps = state => {
  return {
    stepCounter: state.stepCounter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment: () => increment(),
      decrement: () => decrement()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
