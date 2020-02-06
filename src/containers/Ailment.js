import React, { useState } from "react";
import data from "../mock/categories";
// import createTypography from "@material-ui/core/styles/createTypography";

const Ailment = () => {
    let category;
    const path = window.location.pathname.split("/");
    const cat = path[2];
    console.log(cat);
    console.log(data);
    data.forEach(item => {
        if (item.id == cat) {
            category = item;
        }
    })
    console.log(category);
    return (

        < div >
            "Query based on: {category.id}"
                <h2 style={{ padding: "1em" }}>{category.title}</h2>

            <img src={category.imageLoad} alt={category.imageAltText} style={{ objectFit: "scale-down" }} />
            <h4>Helpful foods</h4>
            {category.foods.join(", ")}

        </div >
    )
};

export default Ailment;