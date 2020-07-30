import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import 'typeface-roboto';
import { connect } from 'react-redux';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
import Recipe from "./Recipe";
import NewsIngredient from "./News/NewsIngredient";
import axios from "axios";
import { ReactTinyLink } from "react-tiny-link";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 450,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
        margin: "0 0 12 0",
        padding: "1em",
        backgroundColor: "#533e2d",
        color: "white",
    },
    views: {
        margin: "12 0 12 0",
        padding: "1em",
        backgroundColor: "#533e2d",
        color: "white", 
        maxWidth: '40%',
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
    }

});

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

    useEffect(() => {
        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 
            if (recipe) {
                scrollToRef(divRecipe);
            }
        }, [recipe]);

    useEffect(() => {
        let aborted = false;
        if (ingredient) {
            
            const newsSearch = `https://gnews.io/api/v3/search?q=${ingredient.title}&token=${NEWS_TOKEN}&max=2`;
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
        let timestamp = Date.now();
        let name = ingredient.title;

        let ingNTime = {name, timestamp};

        var oldViewed = JSON.parse(localStorage.viewed) || [];
        var filteredViewed = oldViewed.filter(v => v.name !== name);
        filteredViewed.unshift(ingNTime);
        filteredViewed = filteredViewed.slice(0, 5);
        
        localStorage.viewed = JSON.stringify(filteredViewed);

        var ingredientsViewed = filteredViewed.map((x, i) => {
            return ingredients.find(ingredient => ingredient.title === x.name);
        })

        // let image = urlFor(ingredient.mainImage.asset._ref);
        // var oldViewed = new Map(JSON.parse(localStorage.myMap));
        // let myMap = new Map();
        // myMap.set(['name', name, timestamp])
        // myMap.set('timestamp', timestamp)
        // localStorage.myMap = JSON.stringify([...myMap]);
    
        // var viewed = new Map(JSON.parse(localStorage.myMap));
        
        const recipeSearch = `https://api.edamam.com/search?q=${ingredient.title}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=24`;

        const getRecipe = () => {
            axios.get(recipeSearch)
            .then(response => setRecipe(response.data) )
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
                        <Card className={classes.views}>
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
                <div ref={divRecipe}>
                    <Card className={classes.views}>
                            <Typography variant="h5">Recipes for {ingredient.title}</Typography>
                    </Card>
                    <Grid
                        container
                        direction="row"
                        alignContent="space-around"
                    >
                        {recipe && recipe.hits.map((x, i)=> (
                            <Grid item xs key={i}>
                                <Recipe title={x.recipe.label} image={x.recipe.image} link={x.recipe.url} />
                            </Grid>
                        ))}
                    </Grid>
                        
                </div>
               {ingredientsViewed.map((z, i) => {
                    return (
                        <Grid item xs key={i}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                <Typography className={classes.title}>{z.title}</Typography>
                                    <img src={urlFor(z.mainImage.asset._ref)} alt={z.imageAltText} style={imgStyle} />
                                </CardContent>
                            </Card>
                        </Grid>
                   )
               }) }
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