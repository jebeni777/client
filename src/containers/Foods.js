import React from "react";
import foods from "../mock/mockFoods";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import nutrients from "../mock/mockNutrients";
// import createTypography from "@material-ui/core/styles/createTypography";


const Foods = () => {
    const myStyle = {
        border: "1px Solid Gray",
        listStyleType: "none",
        boxShadow: "2px 2px grey",
        marginBottom: "2em",
        padding: "0.5em",
        lineHeight: "1.5em"
    }


    return (
        < div >
            <>
                <Card style={myStyle} >
                    <CardContent>
                        <div style={myStyle}>

                            <ul style={{ listStyleType: "none" }}>
                                {foods.map(ingredient => {
                                    return (
                                        <>
                                            <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2>
                                            <h4>Health benefits</h4>
                                            {ingredient.benefits.join(",  \n")}
                                            <h4>Nutrients</h4>
                                            <ul style={{ listStyleType: "none" }} >
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
                                            </ul>
                                            <h4>Popular recipes</h4>
                                            <ul style={{ listStyleType: "none" }}>
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
                                            </ul>
                                        </>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </>


        </div >
    )
};

export default Foods;