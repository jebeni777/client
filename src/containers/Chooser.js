import React from "react";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import categories from "../mock/categories";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";

const Chooser = props => {
  const myStyle = {
    border: "1px Solid Gray",
    listStyleType: "none",
    boxShadow: "2px 2px grey",
    marginBottom: "2em",
    padding: "1em",
    lineHeight: "1.5em"
  }


  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <Card>
        <CardContent>
          <ul style={{ listStyleType: "none" }}>
            {categories.map(category => {
              return (


                <Link to={`/ailment/${category.id}`}
                  key={category.id}
                >
                  <li
                    style={myStyle}
                  >
                    <h2 style={{ padding: "1em" }}>{category.title}</h2>

                    <img src={category.image} alt={category.imageAltText} style={{ objectFit: "scale-down" }} />
                    <h4>Helpful foods</h4>
                    {category.foods.join(", ")}
                  </li>
                </Link>
              )

            })
            }
          </ul>
        </CardContent>

      </Card>

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


