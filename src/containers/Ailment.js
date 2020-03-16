import React, { useEffect, useState } from "react";
import data from "../mock/categories";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import myConfigSanityClient from "../client";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 900,
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        padding: "0.5em"
    },
    pos: {
        marginBottom: 17,
    },

});

export default function Ailment() {
    const classes = useStyles();
    const path = window.location.pathname.split("/");
    const category = path[path.length - 1];
    console.log(category);
    const [ailment, setAilment] = useState([]);

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const ailment = await client.fetch(`
            *[_type == 'ailments']{
                title, slug, image, imageAltText, body, nutrients, foods}`)
            console.log("ailment: ", ailment)
            setAilment(ailment)
        } catch (e) {
            if (e !== "No current user") {
                alert(e)
            }
        }
        // setIsLoading(false);
    }

    return (

        < div >
            {ailment.map((ailment, index) => {
                function urlFor(_ref) {
                    return builder.image(_ref)
                }
                if (ailment.slug.current === category) {

                    return (

                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title}>{ailment.title}</Typography>
                                <img src={urlFor(ailment.image)} alt={ailment.imageAltText} />

                                <Typography variant="h6">Nutrients that can help</Typography>
                                {ailment.nutrients.map(nutrient => {
                                    console.log(nutrient)
                                    return (
                                        <Link to={`/nutrients/${nutrient.toLowerCase()}`}
                                            key={nutrient}
                                        >
                                            <li>
                                                {nutrient}
                                            </li>
                                        </Link>
                                    )
                                })}

                                <Typography variant="h6">Foods that can help (choose a food for creative ways to use)</Typography>
                                {ailment.foods.map((food, i) => {
                                    console.log(food)
                                    return (
                                        <Link to={`/foods/${food}`}
                                            key={food}
                                        >
                                            <li>
                                                {food}
                                            </li>
                                        </Link>
                                    )
                                })}

                            </CardContent>
                        </Card>
                    )
                }
            })
            }
        </div >
    )
};