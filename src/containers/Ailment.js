import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import imageUrlBuilder from "@sanity/image-url";
import myConfigSanityClient from "../client";
import { connect } from 'react-redux';

const builder = imageUrlBuilder(myConfigSanityClient);

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
        fontSize: 30,
        fontWeight: "bolder",
        padding: "0.5em"
    },
    pos: {
        marginBottom: "1em",
    },
    top: {
        marginTop: 12,
    },
});

function urlFor(_ref) {
    return builder.image(_ref)
}

function Ailment(props) {
    const classes = useStyles();
    const ailment = props.location.state.here;
    let items = new Set([]);

    ailment.foods.map((ailIng) => {
        items.add(ailIng);
    })

    const ailNutrients = [];
    props.nutrients.map((nutri, idx) => {
        ailment.nutrients.map((nutrient, i) => {
            if (nutri.slug.current === ailment.nutrients[i].toLowerCase()) {
                ailNutrients.push(nutri)
            }
        })
    })

    const allFoods = [];
    ailNutrients.map((nutrient, i) => {
        nutrient.ingredients.map((food, idx) => {
               items.add(food);
        })

    })

    items.forEach((item) => {
        let foundIng = false;
        props.ingredients.map((ing) => {
            
            if (ing.title.toLowerCase() === item) {
                
                allFoods.push({text: item, slug: ing.slug.current}) ;
                foundIng = true;
            } 
        })
        if (!foundIng) {
            // without slug can't make proper link 
            allFoods.push({text: item, slug: "could not find"});
        } 
    })

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title}>{ailment.title}</Typography>
                    <Typography className={classes.pos}><img src={urlFor(ailment.image)} alt={ailment.imageAltText} /></Typography>
                    <Typography className={classes.pos} variant="body1">{ailment.body[0].children[0].text}</Typography>
                    <Typography variant="h6">Nutrients that can help</Typography>
                    {ailment.nutrients.map((nutrient, i) => {
                        return (
                            <Link to={`/nutrients/${nutrient.toLowerCase()}`}

                                key={i}
                            >
                                <li style={{ listStyleType: "none", marginLeft: 20 }}>
                                    {nutrient}
                                </li>
                            </Link>
                        )
                    })}

                    <Typography variant="h6">Helpful foods</Typography>
                    {/* {ailment.foods.map((food, i) => {
                        return (
                            <Link to={`/foods/${food}`}
                                key={i}
                            >
                                <li style={{ listStyleType: "none", marginLeft: 20 }}>
                                    {food}
                                </li>
                            </Link>
                        )
                    })} */}
                    {allFoods.map((ingre, j) => {
                        return (
                            <Link to={`/foods/${ingre.slug}`}
                                key={j}
                            >
                                <li style={{ listStyleType: "none", marginLeft: 20 }}>
                                    {ingre.text}
                                </li>
                            </Link>
                        )
                    })}

                </CardContent>
            </Card>
        </>
    )
};

const mapStateToProps = state => {
    return {
        ailments: state.ailment,
        nutrients: state.nutrients,
        ingredients: state.ingredients
    };
};

export default connect(
    mapStateToProps,
)(Ailment);