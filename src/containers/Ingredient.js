import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import 'typeface-roboto';
import { connect } from 'react-redux';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfigSanityClient);

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
    top: {
        marginTop: 12,
    },
});

const imgStyle = {
    height: "8em",
    width: "8em",
};

function urlFor(_ref) {
    return builder.image(_ref)
}

function Ingredient({ ingredient, everything }) {
    const classes = useStyles();

    if (!ingredient) {
        return <div>Ingredient doesn't exist</div>
    } else {
        return (
            < div >
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title}>{ingredient.title}</Typography>
                        <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                        <h4>Possible benefits</h4>
                        {ingredient.body[0].children[0].text}
                        <h4>Nutrients</h4>

                        {ingredient.nutrients.map((nutrient, i) => {
                            console.log(nutrient)

                            return (
                                <Link to={{ pathname: `/nutrients/${nutrient}`, state: { here: nutrient } }}
                                    key={nutrient}
                                >
                                    <li>{nutrient}</li>
                                </Link>
                            )
                        })}

                        <h4>Creative uses</h4>

                        {ingredient.uses.map((uses, i) => {
                            console.log(uses)

                            return (
                                <Link to={`/foods/${ingredient}`}
                                    key={uses}
                                >
                                    <li>{uses}</li>
                                </Link>
                            )
                        })}

                    </CardContent>
                </Card>
                {/* <Grid
                container
                direction="row"
                justify="center"
            >
                {props.ingredient.map((ingredient, index) => {
                    if (ingredient.slug.current === foodCategory) {
                        return (
                            <Grid item xs >
                            </Grid>
                        )
                    }
                })}

            </Grid> */}

            </div >
        )
    }
};

const mapStateToProps = (state, props) => {
    const ingredientName = props.location.state.here;
    const ingredient = state.ingredients.find(ingredient => ingredient.slug.current === ingredientName);

    return {
        ingredient,
        ingredients: state.ingredients
    };
};

export default connect(
    mapStateToProps,
)(Ingredient);