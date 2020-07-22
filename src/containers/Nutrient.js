import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getObject } from '../helpers/helper';

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 450,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
        fontWeight: "bolder",
    },
    pos: {
        marginBottom: 12,
        fontWeight: "bolder",
    },
    top: {
        marginTop: 12,
        marginBottom: 12,
    },
    h6: {
        fontSize: 16,
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
    const { nutrient, ingredients } = props;

    if (!nutrient) {
        return <div>Nutrient doesn't exist</div>
    } else {
        return (
            < div >
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title}>{nutrient.title}</Typography>
                        <img src={urlFor(nutrient.mainImage.asset._ref)} alt={nutrient.imageAltText} style={imgStyle} />

                        <Typography className={classes.pos} variant="h5">Possible Benefits</Typography>
                        <Typography className={classes.top} variant="body1"><b>
                            {nutrient.body[0].children[0].text}
                            </b></Typography>

                        <Typography variant="h5"><b>Foods rich in {nutrient.title}</b></Typography>
                        <Typography variant="h5" style={{ marginBottom: 6 }}><b>Click a food for creative uses</b></Typography>
                        {nutrient.ingredients.map((food, i) => {
                            const foodObj = getObject(food, ingredients);
                            const foodSlug = foodObj ? foodObj.slug.current : 'Could not find food';
                            return (
                                <Link to={`/foods/${foodSlug}`}
                                    key={i}
                                >
                                    <li style={{ listStyleType: "none", marginLeft: 20, fontSize: 22, fontWeight: "bolder" }}>
                                        {food}
                                    </li>
                                </Link>
                            )
                        })}
                    </CardContent>
                </Card>
            </div >
        )
    }
};

const mapStateToProps = (state, props) => {
    const nutrientName = props.match.params.nutrient;
    const nutrient = state.nutrients.find(nutrient => nutrient.slug.current === nutrientName)

    return {
        ingredients: state.ingredients,
        nutrient
    };
};

export default connect(
    mapStateToProps,
)(Nutrients);