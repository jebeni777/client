// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import 'typeface-roboto';
// import myConfigSanityClient from '../client';
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(myConfigSanityClient);

// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//         maxWidth: 275,

//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 30,
//     },
//     pos: {
//         marginBottom: 12,
//     },

//     top: {
//         marginTop: 12,
//     },
// });

// const imgStyle = {
//     height: "8em",
//     width: "8em",
// }

// function Foods(props) {
//     const classes = useStyles();
//     const { foods } = props;
//     function urlFor(_ref) {
//         return builder.image(_ref)
//     }

//     return (
//         <>
//             <Grid
//                 container
//                 direction="row"
//                 justify="center"
//             >
//                 {props.foods.map((ingredient, i) => {
//                     { console.log("ingredient after map", ingredient) }
//                     return (


//                         <Grid item xs key={i}>
//                             <Card className={classes.root} variant="outlined">
//                                 <CardContent>

//                                     <Link to={`/foods/${ingredient.id}`}>
//                                         <h2 style={{ padding: "0.5em" }}>{ingredient.title}</h2>
//                                         <img src={urlFor(ingredient.mainImage.asset._ref)} alt={ingredient.imageAltText} style={imgStyle} />
//                                     </Link>
//                                     <h4>Possible benefits</h4>
//                                     {ingredient.body[0].children[0].text}
//                                     <h4>Nutrients</h4>

//                                     {ingredient.nutrients.map((nutrient) => {
//                                         console.log(nutrient)

//                                         return (
//                                             <Link to={`/nutrients/${nutrient.toLowerCase()}`}
//                                                 key={nutrient}
//                                             >
//                                                 <li>{nutrient}</li>
//                                             </Link>
//                                         )
//                                     })}

//                                     <h4>Creative uses</h4>

//                                     {ingredient.uses.map(uses => {
//                                         console.log(uses)

//                                         return (

//                                             <Link to={`/foods/${ingredient}`}
//                                                 key={uses}
//                                             >
//                                                 <li>{uses}</li>
//                                             </Link>
//                                         )
//                                     })}
//                                 </CardContent>

//                             </Card>
//                         </Grid>


//                     )
//                 })
//                 }


//             </Grid>


//         </>
//     )
// };

// const mapStateToProps = state => {
//     return {
//         foods: state.foods,
//         ingredients: state.ingredient
//     };
// };

// export default connect(
//     mapStateToProps,
// )(Foods);