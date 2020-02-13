import React from "react";
import data from "../mock/categories";
import { Link } from "react-router-dom";


// import createTypography from "@material-ui/core/styles/createTypography";

const Ailment = () => {
    let category;
    const path = window.location.pathname.split("/");
    const cat = path[2];
    console.log(cat);
    console.log(data);
    data.forEach(item => {
        if (item.id === cat) {
            category = item;
        }
    })
    console.log(category);

    return (

        < div >
            <h1 style={{ padding: "1em" }}>{category.title}</h1>
            {/* <img src={category.imageLoad} alt={category.imageAltText} style={{ objectFit: "scale-down" }} /> */}
            <img src={category.image} alt={category.imageAltText} />

            <h4>Helpful foods (choose a food for helpful ways to use)</h4>
            {/* {category.foods.join(", ")} */}
            <ul style={{ listStyleType: "none" }}>
                {category.foods.map((food, i) => {
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

export default Ailment;