import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
    },
    inline: {
      display: 'inline',
    },
    divide: {
      maxWidth: '36ch',
    }
  });

const NewsNutrient = (props) => {
    const classes = useStyles();

    return (
        <>
            <ListItem alignItems="flex-start">
                <a href={props.link} target="_blank">
                <ListItemAvatar>
                    <Avatar alt="News Image" src={props.image} />
                </ListItemAvatar>
                <ListItemText 
                    primary={props.title}
                    secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {props.date.slice(0,10)}
                          </Typography>
                        </React.Fragment>
                      }
                />
                </a>
            </ListItem>
            <Divider component="li" />
        </>
    
    )
}

export default NewsNutrient;