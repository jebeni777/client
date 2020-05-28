import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import 'typeface-roboto';
import myConfigSanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import { makeStyles } from "@material-ui/core/styles";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 160,
        maxWidth: 160,
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

function urlFor(_ref) {
    return builder.image(_ref)
}
function FoodChooser(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
            >
                {props.foodChooser.map((foodGroup, i) => {
                    return (
                        <Grid item xs key={i}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Link to={`/foods/category/${foodGroup.slug.current}`}
                                        key={i}
                                    >
                                        <div>
                                            <h2 style={{ padding: "0.5em" }}>{foodGroup.title}</h2>
                                            <img src={urlFor(foodGroup.image.asset._ref)} alt={foodGroup.imageAltText} style={imgStyle} />
                                            <h5>{foodGroup.description}</h5>
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
        foodChooser: state.foodChooser
    };
};

export default connect(mapStateToProps)(FoodChooser);


