import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import nutrients from "../mock/mockNutrients";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";
import Grid from '@material-ui/core/Grid';

const NutriChooser = props => {
    const cardStyle = {
        border: "1px Solid Gray",
        borderRadius: "0.5em",
        listStyleType: "none",
        boxShadow: "2px 2px grey",
        marginBottom: "2em",
        padding: "1em",
        lineHeight: "1.5em",
        maxWidth: "12em",
        minWidth: "12em",
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
                {nutrients.map(nutrient => {
                    return (
                        <Grid item xs>
                            <div style={cardStyle}>

                                <Link to={`/nutrients/${nutrient.id}`}
                                    key={nutrient.id}
                                >
                                    <h2 style={{ padding: "0.5em" }}>{nutrient.title}</h2>
                                </Link>
                                <li>
                                    <img src={nutrient.image} alt={nutrient.imageAltText} style={imgStyle} />
                                    <h4 style={{ padding: "0.5em" }}>Why it helps</h4>
                                    <h5>{nutrient.benefits}</h5>
                                </li>

                            </div>
                        </Grid>
                    )

                })
                }
            </Grid>

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
)(NutriChooser);


