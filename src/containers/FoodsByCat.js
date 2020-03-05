import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import 'typeface-roboto';
import client from "../client";
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
});

const imgStyle = {
    height: "8em",
    width: "8em",

}

export default function FoodsByCat() {
    const classes = useStyles();
    const path = window.location.pathname.split("/");
    const foodCat = path[path.length - 1];
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const ingredient = await client.fetch(`
            *[_type == 'ingredient']{
                title, slug, mainImage, imageAltText, category, body, nutrients, uses}`)
            console.log("ingredients before category: ", ingredient)
            setFoods(ingredient)
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
                <>
                    {foods.map(ingredient => {
                        console.log("ingredient for category: ", ingredient)
                        function urlFor(_ref) {
                            return builder.image(_ref)
                        }
                        if (ingredient.slug.current === foodCat) {
                            console.log(foodCat)
                            return (
                                <Grid item xs>
                                    <Card className={classes.root} variant="outlined">
                                        <CardContent>
                                            <Link to={`/foods/${ingredient.id}`}
                                                key={ingredient.id}
                                            >
                                                <Typography className={classes.title}>
                                                    {ingredient.title}
                                                </Typography>
                                                {/* <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2> */}
                                                <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                                            </Link>
                                            <h4>Health benefits</h4>
                                            {ingredient.benefits.join(",  \n")}
                                            <h4>Nutrients</h4>

                                            {ingredient.nutrients.map((nutrient) => {
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
                                            {/* <ul style={{ listStyleType: "none" }}> */}
                                            {ingredient.recipes.map((recipe) => {
                                                console.log(recipe)

                                                return (

                                                    <Link to={`/foods/${ingredient}`}
                                                        key={recipe}
                                                    >
                                                        <li>{recipe}</li>
                                                    </Link>
                                                )
                                            })}
                                        </CardContent>
                                    </Card>
                                </Grid>

                            )
                        }

                    })
                    }

                </>
            </Grid>


        </div >
    )
};