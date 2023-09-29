import React from "react";
import classes from "./HeaderNav.module.css";

function HeaderNav(props) {
    return (
        <div className={classes['navigation-wrap']}>
            <div className={classes['navigation-block']}>
                <ul className={classes['header-menu']}>
                    <li className={classes['menu-option']}>Log in</li>
                    <li className={classes['menu-option']}>Sign up</li>
                </ul>
            </div>
        </div>
    )
};

export default HeaderNav;