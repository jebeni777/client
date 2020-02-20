import React from "react";
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

function NutriChooser() {
    const classes = useStyles();

    // const cardStyle = {
    //     border: "1px Solid Gray",
    //     borderRadius: "0.5em",
    //     listStyleType: "none",
    //     boxShadow: "2px 2px grey",
    //     marginBottom: "2em",
    //     padding: "1em",
    //     lineHeight: "1.5em",
    //     maxWidth: "12em",
    //     minWidth: "12em",
    // }

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
                                    <Typography className={classes.pos} color="textSecondary">
                                        Why it helps
                                    </Typography >
                                    {/* {nutrient.benefits.map((benefit, i) => {
                                        console.log(benefit)
                                        return (
                                            <>
                                                <Link to={`/nutrient/${benefit}`}
                                                    key={benefit}
                                                >
                                                    <li>
                                                        {benefit}
                                                    </li>
                                                </Link>
                                            </>
                                        )
                                    })} */}
                                    <Typography variant="body2" component="h5">
                                        {nutrient.benefits}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
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


