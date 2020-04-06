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

function Nutrients({ nutrient, everything }) {
    const classes = useStyles();

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

                        <Typography className={classes.top} variant="h6">
                            {nutrient.body[0].children[0].text}
                        </Typography>
                        <Typography className={classes.top} variant="h6">Helpful foods</Typography>
                        {nutrient.ingredients.map((food, i) => {

                            console.log(food)
                            return (


                                // <Link to={`/ingredient/${food}`}
                                //     key={food.id}
                                // >
                                <li key={i}>

                                    {food}
                                </li>
                                // </Link>
                            )
                        })}

                    </CardContent>
                </Card>
            </div >
        )
    }
};

const mapStateToProps = (state, props) => {
    const nutrientName = props.location.state.here;
    const nutrient = state.nutrients.find(nutrient => nutrient.slug.current === nutrientName);

    return {
        nutrient,
        nutrients: state.nutrients
    };
};



export default connect(
    mapStateToProps
)(Nutrients);