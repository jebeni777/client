import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import 'typeface-roboto';
import client from '../client';
import myConfigSanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import { makeStyles } from "@material-ui/core/styles";

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
});
const imgStyle = {
    height: "8em",
    width: "8em",

}

function FoodChooser(props) {
    const classes = useStyles();
    const [foodCat, setFoodCat] = useState([]);

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const foodGroups = await client.fetch(`
                *[_type == 'categories-foods']{
                    title, slug, image, imageAltText}`)
            console.log("foodCat testing: ", foodGroups);
            setFoodCat(foodGroups);
        } catch (e) {
            if (e !== "No current user") {
                alert(e)
            }
        }
        // setIsLoading(false);
    }


    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
            >
                {foodCat.map((foodCat, index) => {
                    function urlFor(_ref) {
                        return builder.image(_ref)
                    }
                    return (
                        <Grid item xs>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Link to={`/foods/category/${foodCat.slug.current}`}
                                        key={foodCat.id}
                                    >
                                        <div>
                                            <h2 style={{ padding: "0.5em" }}>{foodCat.title}</h2>
                                            <img src={urlFor(foodCat.image.asset._ref)} alt={foodCat.imageAltText} style={imgStyle} />
                                            <h5>{foodCat.description}</h5>
                                        </div>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
                }
            </Grid>

        </div >
    );
};

const mapStateToProps = state => {
    return {
        stepCounter: state.stepCounter
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            increment: () => increment(),
            decrement: () => decrement()
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodChooser);


