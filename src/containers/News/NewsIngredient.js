import React from 'react';

const NewsIngredient = (props) => {
    console.log("props", props);
    return (
    <a href={props.link} target="_blank">    
    <h3>{props.title}</h3>
    </a>
    )
}

export default NewsIngredient;