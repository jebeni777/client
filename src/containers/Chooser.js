import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import imageUrlBuilder from "@sanity/image-url";
import myConfigSanityClient from '../client';

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 200,
    borderRadius: 10,
    alignContent: "center",
    backgroundColor: "#FFF",

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 22,
    padding: 10,
  },
  pos: {
    marginBottom: 17,
  },
  top: {
    marginTop: 12,
  },
});

const imgStyle = {
  height: "11em",
  width: "11em",
}

function urlFor(_ref) {
  return builder.image(_ref)
}

function Chooser(props) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
      >
        {props.ailments.map((category, i) => {
          return (
            <Grid item xs key={i}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Link to={{ pathname: `/ailment/${category.slug.current}`, state: { here: category } }}
                    key={i}
                  >
                    <Typography className={classes.title}>{category.title}</Typography>
                    <img src={urlFor(category.image.asset._ref)} alt={category.imageAltText} style={imgStyle} />
                  </Link>
                  <Typography className={classes.pos} variant="body1">{category.body[0].children[0].text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })
        }
      </Grid>
    </>
  )
};

const mapStateToProps = state => {
  return {
    ailments: state.ailments
  };
};


export default connect(
  mapStateToProps,
)(Chooser);


