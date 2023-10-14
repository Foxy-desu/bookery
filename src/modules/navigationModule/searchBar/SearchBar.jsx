import React from "react";
import classes from "./SearchBar.module.css";
import { NavLink } from "react-router-dom";

function SearchBar(props){

    let searchBarInput = React.createRef();

    
    function inputOnChange(){
        let text = searchBarInput.current.value;
        props.inputOnChange(text);
    };

    function createCategory(){
        props.createCategory();
    };
    return (
    <div className={classes['search-bar']}>
        <div className={classes['search-bar__wrap']}>
            <form className={classes['search-bar__form']}>
                <input className={classes['search-bar__input']} ref={searchBarInput} value={props.currentNameField} onChange={inputOnChange} required></input>
                <div className={classes['search-bar__buttons']}>
                    
                    <div>
                        <button className={`${classes['search-bar__search-button']} 
                                            ${classes['search-bar__button']}`} 
                                type="button">Search
                        </button>
                    </div>
                    <div>
                        <NavLink to='/recipe-create'>
                            <button className={`${classes['search-bar__new-recipe-button']} ${classes['search-bar__button']}`} 
                                    type="button">
                                        New recipe
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <button className={`${classes['search-bar__new-category-button']} ${classes['search-bar__button']}`} 
                                type="button" onClick={createCategory}>
                                    New category
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </div>
    )
};

export default SearchBar;