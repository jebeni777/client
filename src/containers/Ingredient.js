import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import 'typeface-roboto';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        fontSize: 18,
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
};

<<<<<<< HEAD
function urlFor(_ref) {
    return builder.image(_ref)
}
=======
function Ingredient(props) {
    const classes = useStyles();
    const ingredient = props.location.state.here
    // const path = window.location.pathname.split("/");
    //load const foodCategory = path[path.length - 1];
    // const [ingredient, setIngredient] = useState([]);

    console.log("ingredient for props.location.state.here: ", ingredient)
    console.log("props.ingredient: ", props.ingredient)
    console.log("props for everything: ", props.everything)

>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e

function Ingredient({ ingredient, everything }) {
    const classes = useStyles();

<<<<<<< HEAD
    if (!ingredient) {
        return <div>Ingredient doesn't exist</div>
    } else {
        return (
            < div >
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title}>{ingredient.title}</Typography>
                        <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                        <h4>Possible benefits</h4>
                        {ingredient.body[0].children[0].text}
                        <h4>Nutrients</h4>

                        {ingredient.nutrients.map((nutrient, i) => {
                            console.log(nutrient)

                            return (
                                <Link to={{ pathname: `/nutrients/${nutrient}`, state: { here: nutrient } }}
                                    key={nutrient}
                                >
                                    <li>{nutrient}</li>
                                </Link>
                            )
                        })}

                        <h4>Creative uses</h4>

                        {ingredient.uses.map((uses, i) => {
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
                {/* <Grid
=======
    function urlFor(_ref) {
        return builder.image(_ref)
    }

    return (
        < div >
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <h1>{ingredient.title}</h1>
                    {/* <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2> */}
                <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                <h4>Possible benefits</h4>
                {ingredient.body[0].children[0].text}
                {/* {ingredient.benefits.join(",  \n")} */}
                <h4>Nutrients</h4>

                {ingredient.nutrients.map((nutrient, i) => {
                    console.log(nutrient)

                    return (
                        <Link to={{ pathname: `/nutrients/${nutrient}`, state: { here: nutrient } }}
                            key={nutrient}
                        >
                            <li>{nutrient}</li>
                        </Link>
                    )
                })}

                <h4>Creative uses</h4>

                {ingredient.uses.map((uses, i) => {
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
            </Card >
        {/* <Grid
>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e
                container
                direction="row"
                justify="center"
            >
                {props.ingredient.map((ingredient, index) => {
                    if (ingredient.slug.current === foodCategory) {
                        return (
                            <Grid item xs >
                            </Grid>
                        )
                    }
                })}

            </Grid> */}
<<<<<<< HEAD

            </div >
        )
    }
};

const mapStateToProps = (state, props) => {
    const ingredientName = props.location.state.here;
    const ingredient = state.ingredients.find(ingredient => ingredient.slug.current === ingredientName);
=======
>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e

    return {
        ingredient,
        ingredients: state.ingredients
    };
};

<<<<<<< HEAD
export default connect(
    mapStateToProps,
=======
const mapStateToProps = (state, props) => {
    const ingredientName = props.location.state.here;
    const ingredient = state.ingredients.find(ingredient => ingredient.slug.current === ingredientName);

    return {
        ingredient,
        ingredients: state.ingredient
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            loadIngredients: (ingredient) => loadIngredients(ingredient)
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e
)(Ingredient);