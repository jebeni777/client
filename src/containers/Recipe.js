import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 335,
      borderRadius: 10,
      backgroundColor: "#FFF",
      marginBottom: "1.5em"
  
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
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
         <Card  className={classes.root} variant="outlined">
            <CardContent>
                <a href={props.link} target="_blank">
                <Typography className={classes.title} >{props.title}</Typography>
                <img src={props.image} alt={props.title} style={{ height: 300, width: 300}}/>
                </a>

            </CardContent>
        </Card>
    )
}

export default Recipe;