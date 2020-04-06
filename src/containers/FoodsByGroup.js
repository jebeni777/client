import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import 'typeface-roboto';
import myConfigSanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        minHeight: "100%",
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",
        marginBottom: 0,
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
        marginBottom: 0,
    },
    top: {
        marginTop: 12,
    },
});

const imgStyle = {
    height: "8em",
    width: "8em",

}

function urlFor(_ref) {
    return builder.image(_ref)
}

function FoodsByGroup({ ingredient, foodGroup }) {
    const classes = useStyles();


    // if (!foodGroups) {
    //     return <div>Foodgroup doesn't exist</div>
    // } else { }
    return (
        < div >
            <Grid
                container
                direction="row"
                justify="center"
            >
                <Grid item xs>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Link to={{ pathname: `/foods/${ingredient.id}`, state: { here: ingredient.category } }}
                                key={ingredient.id}
                            >
                                <Typography className={classes.title}>
                                    {ingredient.title}
                                </Typography>
                                <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                            </Link>
                            <Typography variant="h6">Nutrients</Typography>
                            {ingredient.nutrients.map(nutrient => {
                                console.log(nutrient)
                                return (
                                    <Link to={`/nutrients/${nutrient.toLowerCase()}`}
                                        key={nutrient}
                                    >
                                        <li>{nutrient}</li>
                                    </Link>
                                )
                            })}

                            <h4>Creative uses</h4>
                            {/* <ul style={{ listStyleType: "none" }}> */}
                            {ingredient.uses.map((uses) => {
                                console.log(uses)

                                return (



                                    <li key={uses}>{uses}</li>

                                )
                            })}
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>



        </div >
    )
};

const mapStateToProps = (state, props) => {
    const foodGroup = props.location.state.here;
    const ingredient = state.ingredient.find(ingredient => ingredient.slug.current === foodGroup)

    return {
        ingredient,
        foodsByGroup: state.foodGroup,
        ingredients: state.ingredients,
        everything: state
    };
};

export default connect(
    mapStateToProps,
)(FoodsByGroup);