import React from "react";
import foods from "../mock/mockFoods";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles';
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



function Foods() {
    const classes = useStyles();
    const cardStyle = {
        border: "1px Solid Gray",
        borderRadius: "0.5em",
        listStyleType: "none",
        boxShadow: "2px 2px grey",
        marginBottom: "2em",
        padding: "0.5em",
        lineHeight: "1.5em",
        maxWidth: "15em"
    }

    const imgStyle = {
        height: "8em",
        width: "8em",

    }

    // let foodCat;
    // const path = window.location.pathname.split("/");
    // const cat = path[2];
    // console.log(cat);
    // console.log(foods);
    // foods.forEach(item => {
    //     if (item.category === cat) {
    //         foodCat = cat;
    //     }
    // })
    // console.log(foodCat);

    return (
        < div >
            <Grid
                container
                direction="row"
                justify="center"
            >
                <>
                    {foods.map(ingredient => {

                        return (
                            <Grid item xs>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>

                                        {/* <Link to={`/foods/${ingredient.id}`}> */}
                                        <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2>
                                        <img src={ingredient.image} alt={ingredient.imageAltText} style={imgStyle} />
                                        {/* </Link> */}
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

                                        <h4>Popular recipes</h4>
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
                    })
                    }

                </>
            </Grid>


        </div >
    )
};

export default Foods;