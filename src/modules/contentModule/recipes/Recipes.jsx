import React from "react";
import classes from "./Recipes.module.css";

function Recipes(props) {
    return(
        <div className={classes["recipes__wrap"]}>
            <span>{props.recipesCount}</span>
            <p> Recipes count</p>
        </div>
    )
};

export default Recipes;