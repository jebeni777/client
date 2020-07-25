import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
    },
    inline: {
      display: 'inline',
    },
  });

const NewsNutrient = (props) => {
    const classes = useStyles();

    return (
        <>
            <ListItem alignItems="flex-start">
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
                          {/* {props.desc} */}
                        </React.Fragment>
                      }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    
    )
}

export default NewsNutrient;