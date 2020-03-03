import React, { useEffect, useState } from "react";
import foods from "../mock/mockFoods";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles';
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

}

function Foods() {
    const [food, setFood] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const food = await client.fetch(`
            *[_type == 'ingredient']{
                title, slug, mainImage, imageAltText, nutrients, uses}`)
            console.log("food test: ", food)
            setFood(food)
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
                    {food.map(ingredient => {
                        function urlFor(_ref) {
                            return builder.image(_ref)
                        }
                        return (
                            <Grid item xs>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        <Link to={`/foods/${ingredient.id}`}>
                                            <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2>
                                            <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                                        </Link>
                                        <h4>Possible benefits</h4>
                                        {nutrient.body[0].children[0].text}
                                        {/* {ingredient.benefits.join(",  \n")} */}
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

                                        {ingredient.uses.map(uses => {
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
                    })
                    }

                </>
            </Grid>


        </div >
    )
};

export default Foods;