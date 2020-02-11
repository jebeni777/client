import React from "react";
import nutrients from "../mock/mockNutrients";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
// import createTypography from "@material-ui/core/styles/createTypography";

const Nutrients = () => {
    const myStyle = {
        border: "1px Solid Gray",
        listStyleType: "none",
        boxShadow: "2px 2px grey",
        marginBottom: "2em",
        padding: "1em",
        lineHeight: "1.5em"
    }

    // const path = window.location.pathname.split("/");
    // const cat = path[2];
    // console.log(cat);
    // console.log(data);
    // data.forEach(item => {
    //     if (item.id == cat) {
    //         category = item;
    //     }
    // })
    // console.log(category);
    return (

        < div >
            {/* "Query based on: {category.id}"
                <h2 style={{ padding: "1em" }}>{category.title}</h2>

            <img src={category.imageLoad} alt={category.imageAltText} style={{ objectFit: "scale-down" }} />
            <h4>Helpful foods</h4>
            {category.foods.join(", ")} */}
            <Card>
                <CardContent>
                    <ul style={{ listStyleType: "none" }}>
                        {nutrients.map(nutrient => {
                            return (


                                <Link to={`/mock/${nutrient.id}`}
                                    key={nutrient.id}
                                >
                                    <li
                                        style={myStyle}
                                    >
                                        <h2 style={{ padding: "1em" }}>{nutrient.title}</h2>

                                        {/* <img src={nutrient.image} alt={nutrient.imageAltText} style={{ objectFit: "scale-down" }} /> */}
                                        <h4>Where to find it</h4>
                                        {nutrient.foods.join(", \n")}
                                    </li>
                                </Link>
                            )

                        })
                        }
                    </ul>

                </CardContent>
            </Card>

        </div >
    )
};

export default Nutrients;