import React from "react";
import classes from "./SearchBar.module.css";
import { NavLink } from "react-router-dom";

function SearchBar(props){

    let searchBarInput = React.createRef();

    
    function inputOnChange(){
        let text = searchBarInput.current.value;
        props.dispatch({type: 'CHANGE-CURRENT-NAME-FIELD', value: text});
    };

    function createCategory(){
        props.dispatch({type: 'CREATE-NEW-CATEGORY'});
    };

    
    return (
    <div className={classes['search-bar']}>
        <div className={classes['search-bar__wrap']}>
            <form className={classes['search-bar__form']}>
                <input className={classes['search-bar__input']} ref={searchBarInput} value={props.state.currentNameField} onChange={inputOnChange}></input>
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