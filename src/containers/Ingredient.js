import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import 'typeface-roboto';
import client from '../client';
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

});

const imgStyle = {
    height: "8em",
    width: "8em",

};

const Ingredients = () => {
    const classes = useStyles();
    const path = window.location.pathname.split("/");
    const foodCategory = path[path.length - 1];
    const [ingredient, setIngredient] = useState([]);




    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const ingredient = await client.fetch(`
            *[_type == 'ingredient']{
                title, slug, mainImage, imageAltText, body, nutrients, uses}`)
            console.log("testing for ingredient: ", ingredient)
            setIngredient(ingredient)
        } catch (e) {
            if (e !== "No current user") {
                alert(e)
            }
        }
        // setIsLoading(false);
    }


    return (
        < div >
            <Grid
                container
                direction="row"
                justify="center"
            >
                {ingredient.map((ingredient, index) => {
                    console.log("again ingredient: ", ingredient);
                    function urlFor(_ref) {
                        return builder.image(_ref)
                    }
                    if (ingredient.slug.current === foodCategory) {
                        return (
                            <Grid item xs >
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>
                                        <h1>{ingredient.title}</h1>
                                        {/* <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2> */}
                                        <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                                        <h4>Possible benefits</h4>
                                        {ingredient.body[0].children[0].text}
                                        {/* {ingredient.benefits.join(",  \n")} */}
                                        <h4>Nutrients</h4>

                                        {ingredient.nutrients.map((nutrient, i) => {
                                            console.log(nutrient)

                                            return (
                                                <Link to={`/nutrients/${nutrient}`}
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
                            </Grid>
                        )
                    }
                })}

            </Grid>

        </div >
    )
};

export default Ingredients;