// import React, { useState } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import nutrients from "../mock/mockNutrients";
// import { Link } from "react-router-dom";
// import { increment, decrement } from "../store/reducers/stepCounter";
// import { makeStyles } from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Button from '@material-ui/core/Button';
// import Typography from "@material-ui/core/Typography";
// import Collapse from '@material-ui/core/Collapse';
// import Grid from '@material-ui/core/Grid';
// import 'typeface-roboto';

// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//         maxWidth: 275,
//         minHeight: 225,
//         maxHeight: 225

//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 18,
//     },
//     pos: {
//         marginBottom: 12,
//     },
// });

// export default function NutriCard(props) {
//     const [expanded, setExpanded] = useState(false);
//     const classes = useStyles();

//     const imgStyle = {
//         height: "8em",
//         width: "8em",

//     }
//     console.log(expanded)
//     return (
//         <Card className={classes.root} variant="outlined">
//             <CardContent>
//                 <Link to={`/nutrients/${props.nutrient.id}`}
//                     key={props.nutrient.id}
//                 >
//                     <Typography className={classes.title} >
//                         {props.nutrient.title}
//                     </Typography>
//                 </Link>
//                 <img src={props.nutrient.image} alt={props.nutrient.imageAltText} style={imgStyle} />

//                 <Typography variant="body2" component="h5">
//                     {props.nutrient.benefits.slice(2)}
//                 </Typography>

//             </CardContent>
//             <CardActions>
//                 {expanded ? (
//                     <div>

//                         <Button onClick={() => setExpanded(!expanded)}>Show less</Button>
//                         {/* <Typography variant="body2" component="h5">
//                             {props.nutrient.benefits}
//                         </Typography> */}
//                     </div>
//                 ) : (
//                         <Button onClick={() => setExpanded(!expanded)}>Show more</Button>
//                     )}
//             </CardActions>
//         </Card>
//     )
// }