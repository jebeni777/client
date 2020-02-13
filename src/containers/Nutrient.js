import React from "react";
import data from "../mock/mockNutrients";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
// import createTypography from "@material-ui/core/styles/createTypography";

const Nutrient = () => {
    const myStyle = {
        border: "1px Solid Gray",
        listStyleType: "none",
        boxShadow: "2px 2px grey",
        marginBottom: "2em",
        padding: "1em",
        lineHeight: "1.5em"
    }
    let nutrient;
    const path = window.location.pathname.split("/");
    const nut = path[2];
    console.log(nut);
    console.log(data);
    data.forEach(item => {
        if (item.id === nut) {
            nutrient = item;
        }
    })
    console.log(nutrient);
    return (

        < div >
            <h1 style={{ padding: "1em" }}>{nutrient.title}</h1>
            <h4>Helpful foods (choose a food for helpful ways to use)</h4>
            {/* {nutrient.foods.join(", ")} */}
            <ul style={{ listStyleType: "none" }}>
                {nutrient.foods.map((food, i) => {
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

            </ul>
        </div >
    )
};

export default Nutrient;