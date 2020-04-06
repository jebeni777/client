import React, { useEffect, useState } from "react";
import { loadIngredients, loadFoods } from '../store/actions/foodsActions';
import { loadFoodsByGroup } from '../store/actions/foodsByGroupActions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles';
import 'typeface-roboto';
import client from '../client';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfigSanityClient);

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
        fontSize: 30,
    },
    pos: {
        marginBottom: 12,
    },

    top: {
        marginTop: 12,
    },
});

const imgStyle = {
    height: "8em",
    width: "8em",
}

function Foods() {
    const classes = useStyles();
    const foodGroup = props.location.state.here;
    const [foods, setFoods] = useState([]);

    console.log("foodGroup: ", props.location.state.here)
    console.log("props everything: ", props.everything)
    console.log("ingredient before return", ingredient)

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const foods = await client.fetch(`
            *[_type == 'ingredient']{
                title, slug, mainImage, imageAltText, nutrients, uses}`)
            console.log("food test: ", foods)
            setFoods(foods)
        } catch (e) {
            if (e !== "No current user") {
                alert(e)
            }
        }
        // setIsLoading(false);
    }
    function urlFor(_ref) {
        return builder.image(_ref)
    }

    return (
        < div >
            <Grid
                container
                direction="row"
                justify="center"
            >
                <>
                    {props.foods.map((ingredient, i) => {
                        { console.log("ingredient after map", ingredient) }
                        return (
                            {
                                ingredient.category === foodGroup.slug.current &&

                                    <Grid item xs key={i}>
                                        <Card className={classes.root} variant="outlined">
                                            <CardContent>

                                                <Link to={{ pathname: `/foods/${ingredient.id}`, state: { here: ingredient } }}>
                                                    <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2>
                                                    <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                                                </Link>
                                                <h4>Possible benefits</h4>
                                                {nutrient.body[0].children[0].text}
                                                {/* {ingredient.benefits.join(",  \n")} */}
                                                <h4>Nutrients</h4>

                                                {ingredient.nutrients.map((nutrient) => {
                                                    console.log(nutrient)

                                                    return (
                                                        <Link to={`/nutrients/${nutrient}`}
                                                            key={nutrient}
                                                        >
                                                            <li>{nutrient}</li>
                                                        </Link>
                                                    )
                                                })}

                                                <h4>Creative uses</h4>

                                                {ingredient.uses.map(uses => {
                                                    console.log(uses)

                                                    return (

                                                        <Link to={`/foods/${ingredient}`}
                                                            key={uses}
                                                        >
                                                            <li>{uses}</li>
                                                        </Link>
                                                    )
                                                })}
                                            </CardContent>

                                        </Card>
                                    </Grid>
                            }

                        )
                    })
                    }

                </>
            </Grid>


        </div >
    )
};

const mapStateToProps = state => {
    return {
        foods: state.foods,
        ingredients: state.ingredient,
        everything: state
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            loadFoods: (foods) => loadFoods(foods),
            loadIngredients: (ingredient) => loadIngredients(ingredient)
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Foods);