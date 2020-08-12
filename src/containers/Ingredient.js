import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import 'typeface-roboto';
import { connect } from 'react-redux';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
import Recipe from "./Recipe";
import NewsIngredient from "./News/NewsIngredient";
import axios from "axios";
import RecentlyViewed from "../components/RecentlyViewed";
import useRecent from "../helpers/useRecent";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: "100%",
        [theme.breakpoints.up('sm')]: {
            maxWidth: 450,
        },
    },
    visited: {
        minWidth: "100%",
        maxWidth: "100%",
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",
    
      },
    title: {
        fontSize: 24,
        fontWeight: "bolder",
    },
    pos: {
        margin: "12 0 12 0",
        fontWeight: "bolder",
    },
    top: {
        fontSize: 16,
        fontWeight: "bolder",
        marginTop: 12,
        marginBottom: 12,
    },
    news: {
        margin: "12 0 12 0",
        padding: "1em",
        backgroundColor: "#533e2d",
        color: "white",
        maxWidth: '100%',
    },
    views: {
        margin: "12 0 12 0",
        padding: "1em",
        backgroundColor: "#533e2d",
        color: "white", 
        
    },
    h6: {
        fontSize: 16,
        fontWeight: 'bolder',
    },
    links: {
        listStyleType: "none",
        fontSize: 22,
        fontWeight: "bolder",
    },
    list: {
        width: '100%',
        maxWidth: '55ch',
    },
    btn: {
        marginTop: 12,
    },
    hide: {
        visibility: "hidden",
    }

}));

const imgStyle = {
    height: "8em",
    width: "8em",

};


function urlFor(_ref) {
    return builder.image(_ref)
}


function Ingredient(props) {
    const classes = useStyles();
    const { ingredient, ingredients } = props;
    const API_ID = '33fca76c';
    const API_KEY = '39f634430116065e2b0fc40a08e396f3';
    const NEWS_TOKEN = '3d11e59e2a6e1f7f309a039b5609d493';
    const [recipe, setRecipe] = useState();
    const [news, setNews] = useState();
    const divRecipe = useRef(null);
    const [recent, setRecent] = useRecent("ingredient");
    const [showRecipes, setShowRecipes] = useState(false);


    useEffect(() => {
        if (ingredient) {
            setRecent(ingredient)
        }
    }, [ingredient]);

    useEffect(() => {
        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 
            if (recipe) {
                setShowRecipes(true);
                scrollToRef(divRecipe);
            }
        }, [recipe]);

    useEffect(() => {
        let aborted = false;
        if (ingredient) {
            
            const newsSearch = `https://gnews.io/api/v3/search?q=${ingredient.title}&token=${NEWS_TOKEN}&max=3`;
            const getNews = () => {
                axios.get(newsSearch)
                .then(response => aborted || setNews(response.data) )
            };
            getNews();
       }
       
       return () => aborted = true;
    }, [ingredient]);

    if (!ingredient) {
        return <div>Ingredient doesn't exist</div>
    } else { 
        
        const recipeSearch = `https://api.edamam.com/search?q=${ingredient.title}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=12`;

        const getRecipe = () => {
            axios.get(recipeSearch)
            .then(response => setRecipe(response.data) )

            showRecipes();
        };

        const showRecipes = () => {
            document.getElementById("results").style.visibility="visible";
        };

        return (
            < div >
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title}>{ingredient.title}</Typography>
                                <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
                                <Typography className={classes.title}>Possible benefits</Typography>
                                <Typography className={classes.top}>{ingredient.body[0].children[0].text}</Typography>
                                <Typography className={classes.title} >Nutrients</Typography>

                                {ingredient.nutrients.map((nutrient, i) => {

                                    return (
                                        <Link to={`/nutrients/${nutrient.toLowerCase()}`}
                                            key={nutrient}
                                        >
                                            <Typography className={classes.links} >  <li style={{ listStyleType: "none" }}>{nutrient}</li></Typography>
                                        </Link>
                                    )
                                })}

                                <Typography className={classes.title}>Creative uses</Typography>
                                {ingredient.uses.map((uses, i) => {
                                    return (
                                        <Typography className={classes.h6} key={i}>{uses}</Typography>
                                    )
                                })}
                                <Button 
                                    aria-label="Recipes"
                                    className={classes.btn}
                                    onClick={getRecipe}
                                    variant="outlined"
                                    color="primary"
                                >
                                    Recipes
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    <Grid item xs >
                        <Card className={classes.news}>
                            <Typography variant="h5">Latest News on {ingredient.title}</Typography>
                        </Card>
                        
                        {news && news.articles.map((y, j)=> (
                            <List className={classes.list} key={j}>
                                <NewsIngredient key={j} 
                                    title={y.title} 
                                    link={y.url} 
                                    image={y.image}
                                    desc={y.description}
                                    date={y.publishedAt}
                                />
                            </List>
                        ))}       
                    </Grid>
                </Grid>
                <div ref={divRecipe} className={classes.hide} id="results">

                    <Card className={classes.views}>

                        <Typography variant="h5">Recipes for {ingredient.title}</Typography>
                    </Card>
                    <Grid
                        container
                        direction="row"
                        alignContent="space-around"
                    >
                        {recipe && recipe.hits.map((x, i) => (
                            <Grid item xs key={i}>
                                <Recipe title={x.recipe.label} image={x.recipe.image} link={x.recipe.url} />
                            </Grid>
                        ))}
                    </Grid>
                        
                </div>
                <div >
                    <RecentlyViewed items={recent} />
               </div>
            </div >
        )
    }
};


const mapStateToProps = (state, props) => {
    const ingredientName = props.match.params.id;
    const ingredient = state.ingredients.find(ingredient => ingredient.slug.current === ingredientName);

    return {
        ingredient,
        ingredients: state.ingredients
    };
};

export default connect(
    mapStateToProps,
)(Ingredient);