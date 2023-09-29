import React from "react";
import classes from "./Navigation.module.css";
import SearchBar from "./searchBar/SearchBar";
import SearchResults from "./searchResults/SearchResults";
import ExtraButtons from "./extraButtons/ExtraButtons";

function Navigation(props) {
    return (
        <div className={classes['navigation']}>
            <div className={classes['navigation__search-bar']}>
                <SearchBar state={props.state}
                           dispatch={props.dispatch}
                           changeCurrentNameField={props.changeCurrentNameField}
                           createNewCategory={props.createNewCategory}/>
            </div>
            <div className={classes['navigation__search-results']}>
                <SearchResults state={props.state}/>
            </div>
            <div className={classes['navigation__extra-buttons']}>
                <ExtraButtons state={props.state}/>
            </div>
        </div>
    )
};

export default Navigation;