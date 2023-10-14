import React from "react";
import classes from "./Navigation.module.css";
import SearchBarContainer from "./searchBar/SearchBarContainer";
import SearchResultsContainer from "./searchResults/SearchResultsContainer";
import ExtraButtons from "./extraButtons/ExtraButtons";

function Navigation() {
    return (
        <div className={classes['navigation']}>
            <div className={classes['navigation__search-bar']}>
                <SearchBarContainer/>
            </div>
            <div className={classes['navigation__search-results']}>
                <SearchResultsContainer/>
            </div>
            <div className={classes['navigation__extra-buttons']}>
                <ExtraButtons/>
            </div>
        </div>
    )
};

export default Navigation;