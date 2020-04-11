<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
// import { loadNutrients } from '../store/actions/nutrientActions';
import { Link } from "react-router-dom";
>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
    },
    pos: {
        marginBottom: 12,
    },
    top: {
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
function Nutrients(props) {
    const classes = useStyles();
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
    console.log("props.everything again: ", everything)
    console.log("nutrient", nutrient)
>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e

=======
    const { nutrient } = props
    console.log("nutrient", nutrient)
>>>>>>> Stashed changes
    if (!nutrient) {
        return <div>Nutrient doesn't exist</div>
    } else {
        return (
            < div >
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title}>{nutrient.title}</Typography>
                        <img src={urlFor(nutrient.mainImage.asset._ref)} alt={nutrient.imageAltText} style={imgStyle} />
                        <Typography className={classes.pos} variant="h6">Possible Benefits</Typography>

<<<<<<< HEAD
                        <Typography className={classes.top} variant="h6">
                            {nutrient.body[0].children[0].text}
                        </Typography>
                        <Typography className={classes.top} variant="h6">Helpful foods</Typography>
                        {nutrient.ingredients.map((food, i) => {
=======
                        <Typography className={classes.top} variant="p">
                            {nutrient.body[0].children[0].text}
                        </Typography>
                        <Typography className={classes.top} variant="h6">Helpful foods</Typography>
                        {nutrient.ingredients.map((food) => {
>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e

                            console.log(food)
                            return (


                                // <Link to={`/ingredient/${food}`}
                                //     key={food.id}
                                // >
<<<<<<< HEAD
                                <li key={i}>
=======
                                <li>
>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e

                                    {food}
                                </li>
                                // </Link>
                            )
                        })}

                    </CardContent>
                </Card>
<<<<<<< HEAD
=======
                {/* <Grid
                container
                direction="row"
                justify="center"
            >
                {props.everything.nutrients.map((nutrient, i) => {
                    {nutriSingle.map((nutrient, index) => { 
                    console.log(nutrient);
                    if (nutrient.slug.current === nutrientChose) {

                        return (
                            < Grid item xs >
                            </Grid>


                        )
                    }
                })}
            </Grid> */}
>>>>>>> 9880f3f92b27dd04cbb62a1eebcd992eaf4f3d8e
            </div >
        )
    }
};

const mapStateToProps = (state, props) => {
    console.log("props in mapState:", props)
    const nutrientName = props.match.params.nutrient;
    const nutrient = state.nutrients.find(nutrient => nutrient.slug.current === nutrientName)

    return {
        nutrient
    };
};



export default connect(
    mapStateToProps
)(Nutrients);