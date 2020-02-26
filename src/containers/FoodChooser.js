import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import foodCats from "../mock/foodCategories";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import client from '../client';
import myConfigSanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(myConfigSanityClient);

const cardStyle = {
    border: "1px Solid Gray",
    borderRadius: "0.5em",
    listStyleType: "none",
    boxShadow: "2px 2px grey",
    marginBottom: "2em",
    padding: "1em",
    lineHeight: "1.5em",
    maxWidth: "12em",
    minWidth: "12em",
}

const imgStyle = {
    height: "8em",
    width: "8em",

}

function FoodChooser(props) {

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
                            <Link to={`/foods/category/${foodCat.slug.current}`}
                                key={foodCat.id}
                            >
                                <div style={cardStyle}>
                                    <h2 style={{ padding: "0.5em" }}>{foodCat.title}</h2>
                                    <img src={urlFor(foodCat.image.asset._ref)} alt={foodCat.imageAltText} style={imgStyle} />
                                    <h5>{foodCat.description}</h5>
                                </div>
                            </Link>
                        </Grid>
                    )
                })
                }
            </Grid>
            <>
                <h1>More helpful information</h1>
                {/* <h3><a href="https://stantonmigraineprotocol.com/">Magraine Help</a></h3> */}
            </>
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


