import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
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

const imgStyle = {
    height: "8em",
    width: "8em",

}

function urlFor(_ref) {
    return builder.image(_ref)
}

function NutriChooser(props) {
    console.log("NutriChooser props", props)
    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
            >
                {props.nutrients.map((nutrient, i) => {
                    console.log("props.nutrient map", nutrient)
                    return (
                        <Grid item xs key={i}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Link to={{ pathname: `/nutrients/${nutrient.slug.current}`, state: { here: nutrient } }}
                                        key={i}
                                    >
                                        <Typography className={classes.title} >
                                            {nutrient.title}
                                        </Typography>
                                    </Link>
                                    <img src={urlFor(nutrient.mainImage.asset._ref)} alt={nutrient.imageAltText} style={imgStyle} />

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

const mapStateToProps = (state, props) => {
    return {
        nutrients: state.nutrients,
        everything: state
    };
};



export default connect(
    mapStateToProps,
)(NutriChooser);


