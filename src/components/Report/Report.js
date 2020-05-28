import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import imageUrlBuilder from '@sanity/image-url';
import myConfigSanityClient from '../../client';
import { connect } from 'react-redux';

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
                        <CardContent>
                            <ul style={{ listStyleType: "none" }}>

                                <Typography variant="h6">
                                    <li key={i}>
                                        {currAil.title}
                                    </li>
                                </Typography>

                                <Typography variant="h6">
                                    <li key={i}>
                                        {currAil.foods}
                                    </li>
                                </Typography>
                                <Typography variant="h6">
                                    <li key={i}>
                                        {currAil.nutrients}
                                    </li>
                                </Typography>
                            </ul>
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
        ailments: state.ailments
    };
};

export default connect(
    mapStateToProps,
)(Report);