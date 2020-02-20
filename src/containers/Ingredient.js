import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
import data from "../mock/mockFoods";
import { Link } from "react-router-dom";
import 'typeface-roboto';

const Ingredients = () => {
    const myStyle = {
        border: "1px Solid Gray",
        listStyleType: "none",
        boxShadow: "2px 2px grey",
        marginBottom: "2em",
        padding: "1em",
        lineHeight: "1.5em"
    }
    let ingredient;
    const path = window.location.pathname.split("/");
    const cat = path[2];
    console.log(cat);
    console.log(data);
    data.forEach(item => {
        if (item.id === cat) {
            ingredient = item;
        }
    })
    console.log(ingredient);
    return (
        < div style={myStyle}>


            <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2>
            <h4>Health benefits</h4>
            {ingredient.benefits.join(",  \n")}
            <h4>Nutrients</h4>
            <ul style={{ listStyleType: "none" }}>
                {ingredient.nutrients.map((nutrient, i) => {
                    console.log(nutrient)

                    return (
                        <Link to={`/foods/${nutrient}`}
                            key={nutrient}
                        >
                            <li>{nutrient}</li>
                        </Link>
                    )
                })}
            </ul>
            <h4>Popular recipes</h4>
            <ul style={{ listStyleType: "none" }}>
                {ingredient.recipes.map((recipe, i) => {
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



        </div >
    )
};

export default Ingredients;