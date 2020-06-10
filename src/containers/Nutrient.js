import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
import { connect } from 'react-redux';

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
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
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
    const { nutrient } = props
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
                        <Typography className={classes.top} variant="body1">
                            {nutrient.body[0].children[0].text}
                        </Typography>

                        <Typography className={classes.top} variant="body2"><b>Foods rich in {nutrient.title}</b></Typography>
                        {nutrient.ingredients.map((food, i) => {
                            return (
                                <li key={i} style={{ listStyleType: "none" }}>

                                    {food}
                                </li>
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
        nutrient
    };
};

export default connect(
    mapStateToProps,
)(Nutrients);