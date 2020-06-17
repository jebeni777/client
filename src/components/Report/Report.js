import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import imageUrlBuilder from '@sanity/image-url';
import myConfigSanityClient from '../../client';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 350,
        maxWidth: 380,
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        padding: "0.5em"
    },
    pos: {
        marginBottom: "1em",
    },
    top: {
        marginTop: 12,
    },
});

const imgStyle = {
    height: "11em",
    width: "11em",

}

function urlFor(_ref) {
    return builder.image(_ref)
}

function Report(props) {
    const { ailArr } = props;
    const classes = useStyles();

    const reportAils = [];
    props.ailments.map((ailment, i) => {
        ailArr.map((ail, idx) => {
            if (ailment.slug.current === ail) {
                reportAils.push(ailment)
            }
        })
    })

    const reportNutrients = [];
    props.nutrients.map((nutrient, i) => {
        reportAils.map((ail, idx) => {

            ail.nutrients.map((a, j) => {
                if (nutrient.slug.current === ail.nutrients[j]) {
                    reportNutrients.push(nutrient)
                }
            })
        })
    })


    const reportNutriFoods = [];
    reportNutrients.map((repNutri, i) => {
        repNutri.ingredients.map((food, idx) => {
            reportNutriFoods.push(food)
        })
    })

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
            >
                {reportAils.map((currAil, i) => {
                    return (
                        <Grid item xs key={i}>
                            <Card className={classes.root} variant="outlined" key={i}>
                                <CardContent key={i}>
                                    <Typography className={classes.title}>{currAil.title}</Typography>
                                    <Typography className={classes.pos}><img src={urlFor(currAil.image)} alt={currAil.imageAltText} /></Typography>
                                    <Typography className={classes.pos} variant="body1">{currAil.body[0].children[0].text}</Typography>
                                    <Typography variant="h6">Helpful foods</Typography>
                                    {currAil.foods.map((food, i) => {
                                        return (
                                            <Link to={`/foods/${food}`}>
                                                <li key={i} style={{ listStyleType: "none" }}>
                                                    {food}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                    {reportNutriFoods.map((food, idx) => {
                                        return (
                                            <Link to={`/foods/${food}`}>
                                                <li key={i} style={{ listStyleType: "none" }}>
                                                    {food}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
                )}
            </Grid>
            <Button variant="outlined" color="primary" onClick={props.closeReport}>Close Report</Button>
        </>

    )
}

const mapStateToProps = state => {
    // console.log("state in mapState:", state);
    // const reportAils = [];
    // state.ailments.map((ailment, i) => {

    //     if (ailment.slug.current === ailArr) {
    //         reportAils.push(ailment)
    //     }
    // })
    // console.log("props in mapState:", props)
    return {
        ailments: state.ailments,
        nutrients: state.nutrients
    };
};

export default connect(
    mapStateToProps,
)(Report);