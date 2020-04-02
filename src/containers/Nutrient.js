import React, { useEffect, useState } from "react";
import { loadNutrients } from '../store/actions/nutrientActions';
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import client from '../client';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

function Nutrients(props) {
    const classes = useStyles();
    const nutrient = props.location.state.here;
    // const path = window.location.pathname.split("/");
    // const nut = path[path.length - 1];
    // const [nutriSingle, setNutriSingle] = useState([]);
    // const [nutrientChose] = useState(nut);


    console.log("props.nutrient: ", props.location.state.here)
    console.log("props.everything again: ", props.everything)
    console.log("nutrient", nutrient)

    // useEffect(() => {
    //     onLoad()
    // }, [])
    // async function onLoad() {
    //     try {
    //         const nutrients = await client.fetch(`
    //         *[_type == 'nutrient']{
    //             title, slug, mainImage, imageAltText, ingredients, body}`)
    //         props.loadNutrients(nutrients)
    //         setNutriSingle(nutrients)
    //     } catch (e) {
    //         if (e !== "No current user") {
    //             alert(e)
    //         }
    //     }
    //     // setIsLoading(false);
    // }
    function urlFor(_ref) {
        return builder.image(_ref)
    }

    return (
        < div >
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title}>{nutrient.title}</Typography>
                    <img src={urlFor(nutrient.mainImage.asset._ref)} alt={nutrient.imageAltText} style={imgStyle} />
                    <Typography className={classes.pos} variant="h6">Possible Benefits</Typography>

                    <Typography className={classes.top} variant="p">
                        {nutrient.body[0].children[0].text}
                    </Typography>
                    <Typography className={classes.top} variant="h6">Helpful foods</Typography>
                    {nutrient.ingredients.map((food) => {

                        console.log(food)
                        return (


                            // <Link to={`/ingredient/${food}`}
                            //     key={food.id}
                            // >
                            <li>

                                {food}
                            </li>
                            // </Link>
                        )
                    })}

                </CardContent>
            </Card>
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
        </div >
    )
};

const mapStateToProps = state => {
    return {
        nutrients: state.nutrients,
        everything: state
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            loadNutrients: (nutrients) => loadNutrients(nutrients)
        },
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nutrients);