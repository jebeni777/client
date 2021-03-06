import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import imageUrlBuilder from "@sanity/image-url";
import myConfigSanityClient from "../client";
import { connect } from 'react-redux';

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: "100%",
        maxWidth: "100%",
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",

    },
    title: {
        fontSize: 30,
        fontWeight: "bolder",
    },
    pos: {
        marginBottom: "1rem",
    },
    list: {
        listStyleType: "none",
        fontSize: 22,
        fontWeight: "bolder",
    },
}));

const imgStyle = {
    height: "11rem",
    width: "11rem",
  }

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
                    <img src={urlFor(ailment.image)} alt={ailment.imageAltText} style={imgStyle} />
                    <Typography className={classes.pos} variant="body1">{ailment.body[0].children[0].text}</Typography>
                    <Typography className={classes.title}>Nutrients that can help</Typography>
                    {ailment.nutrients.map((nutrient, i) => {
                        return (
                            <Link to={`/nutrients/${nutrient.toLowerCase()}`}

                                key={i}
                            >
                                <Typography className={classes.list}><li style={{ listStyleType: "none", marginLeft: 20 }}>
                                    {nutrient}
                                </li></Typography>
                            </Link>
                        )
                    })}

                    <Typography className={classes.title}>Helpful foods</Typography>
                    
                    {allFoods.map((ingre, j) => {
                        return (
                            <Link to={`/foods/${ingre.slug}`}
                                key={j}
                            >
                                <Typography className={classes.list}><li style={{ listStyleType: "none", marginLeft: 20 }}>
                                    {ingre.text}
                                </li></Typography>
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