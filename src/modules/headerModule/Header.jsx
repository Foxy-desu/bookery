import React from "react";
import classes from "./Header.module.css"
import HeaderNav from "./headerNavigation/HeaderNav";

function Header(props) {
    return (
        <div className={classes['header']}>
            <div className={classes['logo-wrap']}>
                <h1 className={classes['logo']}>BOOKERY</h1>
            </div>
            <div className={classes['header-navigation']}>
                <HeaderNav/>
            </div>
        </div>
    )
};

export default Header;