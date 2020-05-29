import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import imageUrlBuilder from "@sanity/image-url";
import myConfigSanityClient from "../client";
import { connect } from 'react-redux';

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 900,
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

function urlFor(_ref) {
    return builder.image(_ref)
}

function Ailment(props) {
    const classes = useStyles();
    const ailment = props.location.state.here;

    return (
        < div >
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title}>{ailment.title}</Typography>
                    <Typography className={classes.pos}><img src={urlFor(ailment.image)} alt={ailment.imageAltText} /></Typography>
                    <Typography className={classes.pos} variant="body1">{ailment.body[0].children[0].text}</Typography>
                    <Typography variant="h6">Nutrients that can help</Typography>
                    {ailment.nutrients.map((nutrient, i) => {
                        return (
                            <Link to={`/nutrients/${nutrient.toLowerCase()}`}

                                key={i}
                            >
                                <li>
                                    {nutrient}
                                </li>
                            </Link>
                        )
                    })}

                    <Typography variant="h6">Helpful foods</Typography>
                    {ailment.foods.map((food, i) => {
                        return (
                            <li key={i}>
                                {food}
                            </li>
                        )
                    })}

                </CardContent>
            </Card>
        </div >
    )
};

const mapStateToProps = state => {
    return {
        ailments: state.ailment
    };
};

export default connect(
    mapStateToProps,
)(Ailment);