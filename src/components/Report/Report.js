import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import myConfigSanityClient from '../../client';

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
        fontSize: 22,
        padding: 10,
    },
    pos: {
        marginBottom: 17,
    },

});

const imgStyle = {
    height: "11em",
    width: "11em",

}

function urlFor(_ref) {
    return builder.image(_ref)
}

export default (props) => {
    console.log("this is begining:", props);
    const classes = useStyles();
    const [ailments] = useState(props);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        try {
            const data = await client.fetch(`
            *[_type == 'ailments']{
                title, slug, image, imageAltText, body, nutrients, foods}`)
            console.log("the data: ", data)
            setDetails(data)
        } catch (e) {
            if (e !== "No current user") {
                alert(e)
            }
        }
    }

    return (
        <div>
            {console.log("this is details: ", details)}
            {details.map((data, i) => {

                { console.log("this is more data:", data) }
                return (
                    <>
                        {props.ailments.map((currAil, i) => {

                            if (data.slug.current === currAil) {
                                // debugger
                                console.log("and ailments after if: ", currAil);
                                return (
                                    <Card className={classes.root} variant="outlined">
                                        <CardContent>
                                            <li key={i}>

                                                <Typography variant="h6">
                                                    <li>
                                                        {data.title}
                                                    </li>
                                                </Typography>

                                                <Typography variant="h6">{data.foods}</Typography>
                                                <Typography variant="h6">{data.nutrients}</Typography>
                                            </li>
                                        </CardContent>
                                    </Card>
                                )
                            }
                        }
                        )}
                    </>
                )
            })}
            <button onClick={props.closeReport}>Close Report</button>
        </div>

    )
}