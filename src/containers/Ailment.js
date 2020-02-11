import React, { useState } from "react";
import data from "../mock/categories";
import { Link } from "react-router-dom";
// import createTypography from "@material-ui/core/styles/createTypography";

const Ailment = () => {
    let category;
    const path = window.location.pathname.split("/");
    const cat = path[2];
    // console.log(cat);
    // console.log(data);
    data.forEach(item => {
        if (item.id == cat) {
            category = item;
        }
    })
    // console.log(category);
    return (

        < div >
            "Query based on: {category.id}"
                <h2 style={{ padding: "1em" }}>{category.title}</h2>

            <img src={category.imageLoad} alt={category.imageAltText} style={{ objectFit: "scale-down" }} />
            <h4>Helpful foods (choose a food for helpful ways to use)</h4>
            {/* {category.foods.join(", ")} */}
            <ul style={{ listStyleType: "none" }}>
                {category.foods.map((food, i) => {
                    console.log(food)
                    return (
                        <Link to={`/foods/{food.id}`}
                            key={food.id}
                        >
                            <li>
                                {food.title}
                            </li>
                        </Link>
                    )
                })}

            </ul>
        </div >
    )
};

export default Ailment;