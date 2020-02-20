import React from "react";
import data from "../mock/categories";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 900,
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 17,
    },

});

function Ailment() {
    const classes = useStyles();
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
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title}>{category.title}</Typography>
                    {/* <h1 style={{ padding: "1em" }}>{category.title}</h1> */}
                    {/* <img src={category.imageLoad} alt={category.imageAltText} style={{ objectFit: "scale-down" }} /> */}
                    <img src={category.image} alt={category.imageAltText} />
                    <Typography variant="body1" component="h4">Helpful foods (choose a food for helpful ways to use)</Typography>
                    {/* <h4>Helpful foods (choose a food for helpful ways to use)</h4> */}
                    {/* {category.foods.join(", ")} */}
                    <Typography variant="body2" component="ul"></Typography>
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
                </CardContent>
            </Card>
        </div >
    )
};

export default Ailment;