import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import nutrients from "../mock/mockNutrients";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import NutriCard from "../components/NutriCard";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        minHeight: "100%",
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",
        marginBottom: 12,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 22,
    },
    pos: {
        marginBottom: 12,
    },
});

function NutriChooser() {
    const classes = useStyles();

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
                    // let expanded = false;
                    // console.log('Expanded? ', expanded)
                    return (
                        <Grid item xs>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Link to={`/nutrients/${nutrient.id}`}
                                        key={nutrient.id}
                                    >
                                        <Typography className={classes.title} >
                                            {nutrient.title}
                                        </Typography>
                                    </Link>
                                    <img src={nutrient.image} alt={nutrient.imageAltText} style={imgStyle} />
                                    <Typography variant="body1" component="h2">Possible Benefits</Typography>
                                    <Typography variant="body2" component="h5">
                                        {nutrient.benefits}
                                    </Typography>
                                </CardContent>
                            </Card>
                            {/* <NutriCard nutrient={nutrient} /> */}
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


