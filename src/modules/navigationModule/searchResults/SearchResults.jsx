import React from "react";
import classes from "./SearchResults.module.css";
import CategoryComponent from "./categoryComponent/CategoryComponent";
import { NavLink } from "react-router-dom";

function SearchResults(props) {

        let categoriesArray = props.state.allCategories.map((category)=> {
            
            let result = (<NavLink  to={`/categories/${(category.categoryName.toLowerCase().replaceAll(' ', ''))}`}><CategoryComponent categoryName={category.categoryName} recipeCount={category.relatedRecipesCount}/></NavLink>)
            return result
        })

    return (
        <div className={classes['search-results__block']}>
            <div className={classes["earch-results__block-wrap"]}>
                {categoriesArray}
            </div>
        </div>
    )
};

export default SearchResults;