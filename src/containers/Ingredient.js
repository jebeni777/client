import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import 'typeface-roboto';
import { connect } from 'react-redux';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
// import { fetchRecipes } from '../apis/recipeFetchApi';
import Recipe from "./Recipe";
import axios from "axios";

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
    btn: {
        
    }
});

const imgStyle = {
    height: "8em",
    width: "8em",
};

function urlFor(_ref) {
    return builder.image(_ref)
}


function Ingredient(props) {
    const classes = useStyles();
    const { ingredient } = props;
    const API_ID = '33fca76c';
    const API_KEY = '39f634430116065e2b0fc40a08e396f3';
    const [recipe, setRecipe] = useState();


    if (!ingredient) {
        return <div>Ingredient doesn't exist</div>
    } else {
        const recipeSearch = `https://api.edamam.com/search?q=${ingredient.title}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=19`;

        const getRecipe = () => {
            axios.get(recipeSearch)
            .then(response => setRecipe(response.data) )
        };

        return (
            < div >
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignContent="space-around"
                >
                    <Grid item xs>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title}>{ingredient.title}</Typography>
                                <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                                <h4>Possible benefits</h4>
                                {ingredient.body[0].children[0].text}
                                <h4>Nutrients</h4>

                                {ingredient.nutrients.map((nutrient, i) => {

                                    return (
                                        <Link to={`/nutrients/${nutrient.toLowerCase()}`}
                                            key={nutrient}
                                        >
                                            <li style={{ listStyleType: "none" }}>{nutrient}</li>
                                        </Link>
                                    )
                                })}

                                <h4>Creative uses</h4>
                                {ingredient.uses.map((uses, i) => {
                                    return (
                                        <li key={i} style={{ listStyleType: "none" }}>{uses}</li>
                                    )
                                })}
                            <Button onClick={getRecipe}
                                variant="outlined"

                            >
                                Recipes
                            </Button>
                            </CardContent>
                        </Card>
                        <Grid
                    container
                    direction="row"
                    justify="center"
                >
                    <Grid item xs>
                        {recipe && recipe.hits.map(x => (

                            <Recipe title={x.recipe.label} image={x.recipe.image} link={x.recipe.url} />
                        ))}
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        )
    }
};

const mapStateToProps = (state, props) => {
    const ingredientName = props.match.params.id;
    const ingredient = state.ingredients.find(ingredient => ingredient.slug.current === ingredientName);

    return {
        ingredient
    };
};

export default connect(
    mapStateToProps,
)(Ingredient);