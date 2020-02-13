import React from "react";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import nutrients from "../mock/mockNutrients";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";

const NutriChooser = props => {
    // const myStyle = {
    //     border: "1px Solid Gray",
    //     listStyleType: "none",
    //     boxShadow: "2px 2px grey",
    //     marginBottom: "2em",
    //     padding: "1em",
    //     lineHeight: "1.5em"
    // }



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
                        {nutrients.map(nutrient => {
                            return (
                                <>
                                    <Link to={`/nutrients/${nutrient.id}`}
                                        key={nutrient.id}
                                    >
                                        <h2 style={{ padding: "1em" }}>{nutrient.title}</h2>
                                    </Link>
                                    <li
                                    // style={myStyle}
                                    >
                                        <h5>{nutrient.description}</h5>
                                        <h4>Helpful foods</h4>
                                        {nutrient.foods.join(", ")}
                                    </li>
                                </>
                            )

                        })
                        }
                    </ul>
                </CardContent>

            </Card>


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


