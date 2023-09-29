import React from "react";
import classes from "./ExtraButtons.module.css";
import { NavLink } from "react-router-dom";

function ExtraButtons(props) {
    return(
    <div className={classes["buttons__wrap"]}>
        <div className={classes["buttons"]}>
            <div className={classes["button-wrap"]}><NavLink to='/recipes'><button className={`${classes["buttons__button"]} ${classes['all-recipes']}`} type="button">Recipes</button></NavLink></div>
            <div className={classes["button-wrap"]}><NavLink to='/categories'><button className={`${classes["buttons__button"]} ${classes['all-categories']}`} type="button">Categories</button></NavLink></div>
            <div className={classes["button-wrap"]}><NavLink to='/favorites'><button className={`${classes["buttons__button"]} ${classes['favorite-recipes']}`} type="button">Favorites</button></NavLink></div>
        </div>
    </div>
    )
};

export default ExtraButtons;