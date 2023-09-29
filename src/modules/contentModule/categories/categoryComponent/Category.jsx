import React from "react";
import classes from "./Category.module.css";

function Category(props) {
    return (
        <div className={classes["category__wrap"]}>
            <div className={classes["category__card"]}>
                <div className={classes["category__card-stats"]}>
                    <h2 className={classes["category-name"]}>{props.categoryName}</h2>
                    <div className={classes["recipe-count"]}>{props.recipeCount}</div>
                </div>
            </div>
        </div>
    )
};

export default Category;