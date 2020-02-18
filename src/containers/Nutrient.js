import React from "react";
import data from "../mock/mockNutrients";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

const Nutrient = () => {
    const cardStyle = {
        border: "1px Solid Gray",
        listStyleType: "none",
        boxShadow: "2px 2px grey",
        marginBottom: "2em",
        padding: "1em",
        lineHeight: "1.5em"
    }

    const imgStyle = {
        height: "8em",
        width: "8em",

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
            <Grid
                container
                direction="row"
                justify="center"
            >
                <>
                    <h1 style={{ padding: "1em" }}>{nutrient.title}</h1>
                    <img src={nutrient.image} alt={nutrient.imageAltText} style={imgStyle} />
                    <h4>Helpful foods (choose a food for helpful ways to use)</h4>
                    {nutrient.foods.map((food, i) => {
                        console.log(food)
                        return (
                            <Grid item xs>
                                <div style={cardStyle}>
                                    <Link to={`/foods/${food}`}
                                        key={food}
                                    >
                                        <li>

                                            {food}
                                        </li>
                                    </Link>
                                </div>
                            </Grid>
                        )
                    })}
                </>
            </Grid>
        </div >
    )
};

export default Nutrient;