import React from "react";
import data from "../mock/mockNutrients";
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
        maxWidth: 275,

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
        marginBottom: 12,
    },

});

function Nutrient() {
    const classes = useStyles();
    // const cardStyle = {
    //     border: "1px Solid Gray",
    //     listStyleType: "none",
    //     boxShadow: "2px 2px grey",
    //     marginBottom: "2em",
    //     padding: "1em",
    //     lineHeight: "1.5em"
    // }

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
                <Grid item xs>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title}>
                                {nutrient.title}
                            </Typography>
                            {/* <h1 style={{ padding: "1em" }}>{nutrient.title}</h1> */}
                            <img src={nutrient.image} alt={nutrient.imageAltText} style={imgStyle} />
                            <h4>Helpful foods (choose a food for helpful ways to use)</h4>
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

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </div >
    )
};

export default Nutrient;