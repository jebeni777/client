import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadFoodsByGroup } from '../store/actions/foodsByGroupActions';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import 'typeface-roboto';
import client from "../client";
import myConfigSanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
<<<<<<< Updated upstream
import { loadFoods } from "../store/actions/foodsActions";
=======
import { useParams } from 'react-router-dom';
>>>>>>> Stashed changes

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        minHeight: "100%",
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",
        marginBottom: 0,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 22,
    },
    pos: {
        marginBottom: 0,
    },
    top: {
        marginTop: 12,
    },
});

const imgStyle = {
    height: "8em",
    width: "8em",

}

function urlFor(_ref) {
    return builder.image(_ref)
}

<<<<<<< Updated upstream
if (!foodGroups) {
    return <div>Foodgroup doesn't exist</div>
} else { }
=======
>>>>>>> Stashed changes
function FoodsByGroup(props) {
    const classes = useStyles();
    console.log("props in FoodsByGroups", props)
    const { ingredients } = props;


<<<<<<< Updated upstream
    return (
        < div >
            {props.foods.map(ingredient => {
                console.log("ingredient after map: ", ingredient)
                if (ingredient.category === foodGroup) {
                    // console.log("this is ingredient.category now: ", ingredient)
                    return (
                        <Grid
                            container
                            direction="row"
                            justify="center"
                        >
                            <Grid item xs>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>
                                        <Link to={{ pathname: `/foods/${ingredient.id}`, state: { here: ingredient.category } }}
                                            key={ingredient.id}
                                        >
                                            <Typography className={classes.title}>
                                                {ingredient.title}
                                            </Typography>
                                            <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                                        </Link>
                                        <Typography variant="h6">Nutrients</Typography>
                                        {ingredient.nutrients.map(nutrient => {
                                            console.log(nutrient)
                                            return (
                                                <Link to={`/nutrients/${nutrient.toLowerCase()}`}
                                                    key={nutrient}
                                                >
                                                    <li>{nutrient}</li>
                                                </Link>
                                            )
                                        })}

                                        <h4>Creative uses</h4>
                                        {/* <ul style={{ listStyleType: "none" }}> */}
                                        {ingredient.uses.map((uses) => {
                                            console.log(uses)

                                            return (



                                                <li key={uses}>{uses}</li>

                                            )
                                        })}
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    )
                    // }
                }
            })
            }
=======
    // if (!foodGroups) {
    //     return <div>No ingredients to list</div>
    // } else { }
    return (
        < div >
            <Grid
                container
                direction="row"
                justify="center"
            >
                {ingredients.map((ingredient, i) => {
                    return (
                        <Grid item xs key={i}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Link to={`/foods/${ingredient.slug.current}`}
                                        key={ingredient}
                                    >
                                        <Typography className={classes.title}>
                                            {ingredient.title}
                                        </Typography>
                                        <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                                    </Link>
                                    <Typography variant="h6">Nutrients</Typography>
                                    {ingredient.nutrients.map(nutrient => {

                                        return (
                                            <Link to={`/nutrients/${nutrient.toLowerCase()}`}
                                                key={nutrient}
                                            >
                                                <li>{nutrient}</li>
                                            </Link>
                                        )
                                    })}

                                    <h4>Creative uses</h4>
                                    {/* <ul style={{ listStyleType: "none" }}> */}
                                    {ingredient.uses.map((uses) => {


                                        return (



                                            <li key={uses}>{uses}</li>

                                        )
                                    })}
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>



>>>>>>> Stashed changes
        </div >
    )
};

<<<<<<< Updated upstream
const mapStateToProps = state => {
    debugger
    return {
        foods: state.foods,
        foodsByGroup: state.foodGroup,
        everything: state
=======
const mapStateToProps = (state, props) => {
    console.log("state in mapState:", state)
    const foodGroup = props.match.params.id;
    const ingredients = [];
    // ingredients.map(state.ingredients.find(ingredient => ingredient.category === foodGroup))
    // ingredients.push(ingredient)
    state.ingredients.map((ingredient, i) => {
        if (ingredient.category === foodGroup) {
            ingredients.push(ingredient)
        }
    })
    console.log("props in mapState:", props)
    return {
        ingredients
>>>>>>> Stashed changes
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            loadFoodsByGroup: (foodsByGroup) => loadFoodsByGroup(foodsByGroup),
            loadFoods: (foods) => loadFoods(foods)
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodsByGroup);