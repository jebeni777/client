import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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

export default function Nutrient() {
    const path = window.location.pathname.split("/");
    const nut = path[path.length - 1];
    const [nutriSingle, setNutriSingle] = useState([]);
    const [nutrientChose] = useState(nut);
    const classes = useStyles();



    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const nutrient = await client.fetch(`
            *[_type == 'nutrient']{
                title, slug, mainImage, imageAltText, ingredients, body}`)
            // console.log("testing one nutrient: ", nutrient)
            setNutriSingle(nutrient)
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
                {nutriSingle.map((nutrient, index) => {
                    console.log(nutrient);
                    function urlFor(_ref) {
                        return builder.image(_ref)
                    }
                    if (nutrient.slug.current === nutrientChose) {

                        return (
                            < Grid item xs >
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>
                                        <h1>
                                            {nutrient.title}
                                        </h1>
                                        {/* <h1 style={{ padding: "1em" }}>{nutrient.title}</h1> */}
                                        <img src={urlFor(nutrient.mainImage.asset._ref)} alt={nutrient.imageAltText} style={imgStyle} />
                                        <h2>Possible Benefits</h2>
                                        {nutrient.body[0].children[0].text}
                                        {/* <Typography variant="body2" component="p">
                                            {nutrient.body}
                                        </Typography> */}
                                        <br />
                                        <br />
                                        <h4>Helpful foods</h4>
                                        {nutrient.ingredients.map((food) => {

                                            console.log(food)
                                            return (


                                                // <Link to={`/ingredient/${food}`}
                                                //     key={food.id}
                                                // >
                                                <li>

                                                    {food}
                                                </li>
                                                // </Link>
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