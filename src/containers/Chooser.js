import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import categories from "../mock/categories";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Chooser = props => {
  const cardStyle = {
    border: "1px Solid Gray",
    borderRadius: "0.5em",
    listStyleType: "none",
    boxShadow: "2px 2px grey",
    marginBottom: "2em",
    padding: "1em",
    lineHeight: "1.5em",
    maxWidth: "11em"
  }

  const imgStyle = {
    height: "8em",
    width: "8em",

  }

  return (

    <div>
      {/* <ul style={{ listStyleType: "none" }}> */}
      <Grid
        container
        direction="row"
        justify="center"
      // alignItems="baseline"
      >

        {categories.map(category => {
          return (

            <Grid item xs>

              <Link to={`/ailment/${category.id}`}
                key={category.id}
              >
                {/* <Card>
                  <CardContent> */}
                {/* <CardActions > */}


                <div style={cardStyle}>
                  <h2 >{category.title}</h2>
                  <img src={category.image} alt={category.imageAltText} style={imgStyle} />
                  <h5>{category.description}</h5>
                </div>

                {/* </CardActions> */}
                {/* </CardContent>

                </Card> */}
              </Link>
            </Grid>
          )

        })
        }
      </Grid>
      <>
        <h1>More helpful information</h1>
        <h3><a href="https://stantonmigraineprotocol.com/">Magraine Help</a></h3>

      </>
      {/* </ul> */}

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
)(Chooser);


