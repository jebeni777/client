import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import imageUrlBuilder from '@sanity/image-url';
import myConfigSanityClient from '../../client';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 350,
        maxWidth: 350,
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

    return (
        <div>

            {reportAils.map((currAil, i) => {
                return (
                    <Card className={classes.root} variant="outlined" key={i}>
                        <CardContent key={i}>
                            <Typography className={classes.title}>{currAil.title}</Typography>
                            <Typography className={classes.pos}><img src={urlFor(currAil.image)} alt={currAil.imageAltText} /></Typography>
                            <Typography className={classes.pos} variant="body1">{currAil.body[0].children[0].text}</Typography>
                            <Typography variant="h6">Helpful foods</Typography>
                            {currAil.foods.map((food, i) => {
                                return (
                                    <li key={i} style={{ listStyleType: "none" }}>
                                        {food}
                                    </li>
                                )
                            })}
                            <Typography variant="h6">Nutrients that can help</Typography>
                            {currAil.nutrients.map((nutrient, i) => {
                                return (
                                    <>
                                        <Link to={`/nutrients/${nutrient.toLowerCase()}`}

                                            key={i}
                                        >
                                            <li style={{ listStyleType: "none" }}>
                                                {nutrient}
                                            </li>
                                        </Link>
                                    </>
                                )
                            })}
                        </CardContent>
                    </Card>
                )
            }
            )}

            <button onClick={props.closeReport}>Close Report</button>
        </div>

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
        nutrients: state.nutrient
    };
};

export default connect(
    mapStateToProps,
)(Report);