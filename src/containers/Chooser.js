import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadAilments } from '../store/actions/ailmentActions';
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { ReactTinyLink } from 'react-tiny-link';
import client from '../client';
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

});

const imgStyle = {
  height: "11em",
  width: "11em",

}

function Chooser(props) {
  const classes = useStyles();
  const [category, setCategory] = useState([]);

  console.log("props for ails in chooser: ", props.ailments)
  // console.log("props for everything in chooser: ", props.everything)

  useEffect(() => {
    onLoad()
  }, [])
  async function onLoad() {
    try {
      const ailments = await client.fetch(`
        *[_type == 'ailments']{
          title, slug, image, imageAltText, body, nutrients, foods}`)
      props.loadAilments(ailments)
      setCategory(ailments)
    } catch (e) {
      if (e !== "No current user") {
        alert(e)
      }
    }
    // setIsLoading(false);
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
      >

        {props.ailments.map((category, i) => {
          function urlFor(_ref) {
            return builder.image(_ref)
          }
          return (

            <Grid item xs>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Link to={{ pathname: `/ailment/${category.slug.current}`, state: { here: category } }}
                    key={i}
                  >
                    <Typography className={classes.title}>{category.title}</Typography>
                    <img src={urlFor(category.image.asset._ref)} alt={category.imageAltText} style={imgStyle} />
                  </Link>
                  <h5>{category.body[0].children[0].text}</h5>
                </CardContent>
              </Card>
            </Grid>
          )
        })
        }
      </Grid>
      <>
        <Typography className={classes.title}>More helpful information</Typography>
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

      </>

    </div >
  )
};

const mapStateToProps = state => {
  return {
    ailments: state.ailments,
    everything: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadAilments: (ailments) => loadAilments(ailments)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chooser);


