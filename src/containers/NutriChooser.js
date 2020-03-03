import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import nutrients from "../mock/mockNutrients";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/reducers/stepCounter";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import NutriCard from "../components/NutriCard";
import client from "../client";
import myConfigSanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        minHeight: "100%",
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",
        marginBottom: 12,
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
        marginBottom: 12,
    },
});

function NutriChooser() {
    const classes = useStyles();
    const [nutriChoose, setNutriChoose] = useState([]);

    const imgStyle = {
        height: "8em",
        width: "8em",

    }

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const nutrient = await client.fetch(`
            *[_type == 'nutrient']{
                title, slug, mainImage, imageAltText}`)
            console.log("nutrient test: ", nutrient)
            setNutriChoose(nutrient)
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
                {nutriChoose.map((nutrient, index) => {
                    function urlFor(_ref) {
                        return builder.image(_ref)
                    }
                    // let expanded = false;
                    // console.log('Expanded? ', expanded)
                    return (
                        <Grid item xs>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Link to={`/nutrients/${nutrient.slug.current}`}
                                        key={nutrient.id}
                                    >
                                        <Typography className={classes.title} >
                                            {nutrient.title}
                                        </Typography>
                                    </Link>
                                    <img src={urlFor(nutrient.mainImage.asset._ref)} alt={nutrient.imageAltText} style={imgStyle} />

                                </CardContent>
                            </Card>
                            {/* <NutriCard nutrient={nutrient} /> */}
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
)(NutriChooser);


