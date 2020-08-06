import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import myConfigSanityClient from '../client';
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";

const builder = imageUrlBuilder(myConfigSanityClient);

const useStyles = makeStyles({
    visited: {
        minWidth: 170,
        maxWidth: 170,
        borderRadius: 10,
        alignContent: "center",
        backgroundColor: "#FFF",
    
    },
    title: {
        fontSize: 24,
        fontWeight: "bolder",
    },
    views: {
        margin: "12 0 12 0",
        padding: "1em",
        backgroundColor: "#533e2d",
        color: "white", 
        maxWidth: '40%',
    },

});

const imgStyle = {
    height: "8em",
    width: "8em",

};


function urlFor(_ref) {
    return builder.image(_ref)
}


function RecentlyViewed({items}) {
    const classes = useStyles();
    console.log("items", items);
    return (
        <>
        <Card className={classes.views}>
            <Typography variant="h5">Recently Viewed</Typography>
        </Card>
        <Grid 
            container
            direction="row"
            alignContent="space-around"
        >
            
            {items.map((item, i) => {
        
                return (
                    <Grid item xs key={i} >
                        <Card className={classes.visited} variant="outlined">
                            <CardContent>
                                <Typography>{item.title}</Typography>
                                <img src={urlFor(item.mainImage.asset._ref)} alt={item.imageAltText} style={imgStyle} />
                                <Typography>Recently viewed <br />{moment(item.time).fromNow()}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
        </>
    )
} 

export default RecentlyViewed;