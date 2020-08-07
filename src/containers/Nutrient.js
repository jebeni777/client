import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getObject } from '../helpers/helper';
import NewsNutrient from '../containers/News/NewsNutrient';
import axios from 'axios';
import RecentlyViewed from "../components/RecentlyViewed";
import useRecent from "../helpers/useRecent";

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
        marginBottom: 12,
        fontWeight: "bolder",
    },
    top: {
        fontWeight: 16,
        marginTop: 12,
        marginBottom: 12,
    },
    news: {
        margin: "0 0 12 0",
        padding: "1em",
        backgroundColor: "#533e2d",
        color: "white",
    },
    h6: {
        fontSize: 16,
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

};

function urlFor(_ref) {
    return builder.image(_ref)
}
function Nutrients(props) {
    const classes = useStyles();
    const { nutrient, ingredients } = props;
    const NEWS_TOKEN = '3d11e59e2a6e1f7f309a039b5609d493';
    const [news, setNews] = useState();
    const [recent, setRecent] = useRecent("nutrient");

    useEffect(() => {
        if (nutrient) {
            setRecent(nutrient)
        }
    }, [nutrient]);

    useEffect(() => {
        let aborted = false;
        if (nutrient) {
            const newsSearch = `https://gnews.io/api/v3/search?q=${nutrient.title}&token=${NEWS_TOKEN}&max=2`;
            const getNews = () => {
                axios.get(newsSearch)
                .then(response => aborted || setNews(response.data) )
            };
            getNews();
       }
       
       return () => aborted = true;
    }, [nutrient]);

    if (!nutrient) {
        return <div>Nutrient doesn't exist</div>
    } else {
        return (
            < div >
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title}>{nutrient.title}</Typography>
                                <img src={urlFor(nutrient.mainImage.asset._ref)} alt={nutrient.imageAltText} style={imgStyle} />

                                <Typography className={classes.pos} variant="h5">Possible Benefits</Typography>
                                <Typography className={classes.top} variant="body1"><b>
                                    {nutrient.body[0].children[0].text}
                                    </b></Typography>

                                <Typography variant="h5"><b>Foods rich in {nutrient.title}</b></Typography>
                                <Typography variant="h5" style={{ marginBottom: 6 }}><b>Click a food for creative uses</b></Typography>
                                {nutrient.ingredients.map((food, i) => {
                                    const foodObj = getObject(food, ingredients);
                                    const foodSlug = foodObj ? foodObj.slug.current : 'Could not find food';
                                    return (
                                        <Link to={`/foods/${foodSlug}`}
                                            key={i}
                                        >
                                            <Typography className={classes.list} >
                                                {food}
                                            </Typography>
                                        </Link>
                                    )
                                })}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs >
                        <Card className={classes.news}>
                            <Typography variant="h5">Latest News on {nutrient.title}</Typography>
                        </Card>
                        
                        {news && news.articles.map((y, j)=> (
                            <List className={classes.list} >
                                <NewsNutrient key={j} 
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
                <div >
                    <RecentlyViewed items={recent} />
               </div>
            </div >
        )
    }
};

const mapStateToProps = (state, props) => {
    const nutrientName = props.match.params.nutrient;
    const nutrient = state.nutrients.find(nutrient => nutrient.slug.current === nutrientName)

    return {
        ingredients: state.ingredients,
        nutrient
    };
};

export default connect(
    mapStateToProps,
)(Nutrients);