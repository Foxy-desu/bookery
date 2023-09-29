import React from "react";
import classes from "./CategoryComponent.module.css";

function CategoryComponent(props) {
    return (
        <div className={classes["category-component__wrap"]}>
            <p className={`${classes["category-component__name"]} ${classes["category-component__line"]}`}>
                {props.categoryName}
            </p>
            <p className={`${classes["category-component__recipe-count"]} ${classes["category-component__line"]}`}>
                {props.recipeCount}
            </p>
        </div>
    )
};

export default CategoryComponent;