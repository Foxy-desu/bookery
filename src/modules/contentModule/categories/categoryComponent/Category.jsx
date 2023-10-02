import React from "react";
import classes from "./Category.module.css";
import { NavLink } from "react-router-dom";

function Category(props) {
    return (
        <div className={classes["category__wrap"]}>
            <div className={classes["category__card"]}>
                
                    <div className={classes["category__card-stats"]}>
                        <NavLink to={props.categoryPath}>
                            <h2 className={classes["category-name"]}>{props.categoryName}</h2>
                            <div className={classes["recipe-count"]}>{props.recipeCount}</div>
                        </NavLink>
                    </div>
                
            </div>
        </div>
    )
};

export default Category;