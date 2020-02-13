import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import data from "../mock/mockFoods";
// import createTypography from "@material-ui/core/styles/createTypography";

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

        < div >
            {/* "Query based on: {category.id}"
                <h2 style={{ padding: "1em" }}>{category.title}</h2>

            <img src={category.imageLoad} alt={category.imageAltText} style={{ objectFit: "scale-down" }} />
            <h4>Helpful foods</h4>
            {category.foods.join(", ")} */}
            <Card>
                <CardContent>
                    <div
                        style={myStyle}
                    >
                        <h2 style={{ padding: "1em" }}>{ingredient.title}</h2>
                        <h4>Health benefits</h4>
                        {ingredient.benefits.join(",  \n")}
                        {/* <img src={ingredient.image} alt={ingredient.imageAltText} style={{ objectFit: "scale-down" }} /> */}
                        {/* <h4>Nutrients</h4>
                                   {ingredient.nutrients} */}
                        <h4>Popular recipes</h4>

                        {ingredient.recipes.join(",  \n")}

                    </div>



                </CardContent>
            </Card>

        </div >
    )
};

export default Ingredients;