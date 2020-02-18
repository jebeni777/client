import React from "react";
import foods from "../mock/mockFoods";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import nutrients from "../mock/mockNutrients";
import Grid from '@material-ui/core/Grid';
// import createTypography from "@material-ui/core/styles/createTypography";


const Foods = () => {
    const cardStyle = {
        border: "1px Solid Gray",
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

    return (
        < div >
            <Grid
                container
                direction="row"
                justify="center"
            >
                <>
                    {/* <Card style={cardStyle} >
                    <CardContent> */}
                    {/* <div style={cardStyle}> */}

                    {/* <ul style={{ listStyleType: "none" }}> */}
                    {foods.map(ingredient => {
                        return (
                            <Grid item xs>
                                <div style={cardStyle}>
                                    <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2>
                                    <img src={ingredient.image} alt={ingredient.imageAltText} style={imgStyle} />
                                    <h4>Health benefits</h4>
                                    {ingredient.benefits.join(",  \n")}
                                    <h4>Nutrients</h4>
                                    {/* <ul style={{ listStyleType: "none" }} > */}
                                    {ingredient.nutrients.map((nutrient) => {
                                        console.log(nutrient)

                                        return (
                                            <Link to={`/foods/${ingredient.nutrient}`}
                                                key={nutrient}
                                            >
                                                <li>{nutrient}</li>
                                            </Link>
                                        )
                                    })}
                                    {/* </ul> */}
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
                                    {/* </ul> */}
                                </div>
                            </Grid>

                        )
                    })
                    }
                    {/* </ul> */}
                    {/* </div> */}
                    {/* </CardContent>
                </Card> */}
                </>
            </Grid>


        </div >
    )
};

export default Foods;