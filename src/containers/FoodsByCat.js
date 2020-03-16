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
    console.log(foodCat);
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
            {foods.map(ingredient => {
                console.log("this is foodCat now: ", ingredient.uses)
                function urlFor(_ref) {
                    return builder.image(_ref)
                }
                if (ingredient.category === foodCat) {
                    console.log("this is ingredient.category now: ", ingredient)
                    return (
                        <Grid
                            container
                            direction="row"
                            justify="center"
                        >
                            <Grid item xs>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>
                                        <Link to={`/foods/${ingredient.id}`}
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

                                                // <Link to={`/foods/${uses}`}
                                                //     key={uses}
                                                // >
                                                <li key={uses}>{uses}</li>
                                                // </Link>
                                            )
                                        })}
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    )
                    // }
                }
            })
            }
        </div >
    )
};