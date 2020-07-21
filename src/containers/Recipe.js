import React from 'react';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      maxWidth: 350,
      borderRadius: 10,
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
    top: {
      marginTop: 12,
    },
  });
  
  const imgStyle = {
    height: "11em",
    width: "11em",
  }

const Recipe = (props) => {
    const classes = useStyles();
    return (
         <Card className={classes.root} variant="outlined">
            <CardContent>
                <a href={props.link} target="_blank">
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} style={{ height: 300, width: 300}}/>
                </a>

            </CardContent>
        </Card>
    )
}

export default Recipe;