import React from "react";
import classes from "./Categories.module.css";
import Category from "./categoryComponent/Category";

function Categories(props) {

    let categoryItemsArray = props.state.allCategories.map((category)=> {
            
        let result = (<Category categoryName={category.categoryName} recipeCount={category.relatedRecipes.length} categoryPath={`/categories/${(category.categoryName.toLowerCase().replaceAll(' ', ''))}`}/>)
        return result;
    });



    return (
        <div className={classes["categories__wrap"]}>
            <div className={classes["categories__manipulation-block"]}>
            </div>
            <div className={classes["categories__display-block"]}>
                <div className={classes["categories__category-items-wrap"]}>
                    {categoryItemsArray}
                </div>
            </div>
        </div>
    )
};

export default Categories;