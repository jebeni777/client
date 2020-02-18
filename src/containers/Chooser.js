import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import categories from "../mock/categories";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";
import Grid from '@material-ui/core/Grid';


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
      <Grid
        container
        direction="row"
        justify="center"
      >

        {categories.map(category => {
          return (

            <Grid item xs>

              <Link to={`/ailment/${category.id}`}
                key={category.id}
              >
                <div style={cardStyle}>
                  <h2 >{category.title}</h2>
                  <img src={category.image} alt={category.imageAltText} style={imgStyle} />
                  <h5>{category.description}</h5>
                </div>
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


