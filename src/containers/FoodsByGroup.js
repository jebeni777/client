import React from "react";
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
import myConfigSanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { loadFoods } from "../store/actions/foodsActions";


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
        fontSize: 24,
        fontWeight: 'bolder',
    },
    pos: {
        marginBottom: 0,
    },
    top: {
        fontWeight: 16,
        marginTop: 12,
        marginBottom: 12,
    },
    h6: {
        fontSize: 16,
        fontWeight: 'bolder',
        listStyleType: "none",
    },
    list: {
        listStyleType: "none",
        fontSize: 22,
        fontWeight: "bolder",
    },
});

const imgStyle = {
    height: "8em",
    width: "8em",

}

function urlFor(_ref) {
    return builder.image(_ref)
}

function FoodsByGroup(props) {
    const classes = useStyles();
    const { ingredients } = props;

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
                                    {ingredient.nutrients.map((nutrient, i) => {

                                        return (
                                            <Link to={`/nutrients/${nutrient.toLowerCase()}`}
                                                key={i}
                                            >
                                                <Typography className={classes.list} ><li>{nutrient}</li></Typography>
                                            </Link>
                                        )
                                    })}

                                    <Typography className={classes.title} >Creative uses</Typography>
                                    {ingredient.uses.map((uses, i) => {
                                        return (
                                            <Typography className={classes.h6} key={i} ><li>{uses}</li></Typography>
                                        )
                                    })}
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>
        </div >
    )
};

const mapStateToProps = (state, props) => {
    const foodGroup = props.match.params.id;
    const ingredients = [];
    state.ingredients.map((ingredient, i) => {
        if (ingredient.category && ingredient.category.slug.current === foodGroup) {
            ingredients.push(ingredient)
        }
    })
    return {
        ingredients

    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            loadFoodsByGroup: (foodsByGroup) => loadFoodsByGroup(foodsByGroup)
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodsByGroup);