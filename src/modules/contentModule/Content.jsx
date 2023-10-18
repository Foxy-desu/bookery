import React from "react";
import { Routes, Route } from "react-router-dom";
import classes from "./Content.module.css";
import CategoriesContainer from "./categories/CategoriesContainer";
import NewRecipeCreateContainer from "./newRecipeModal/NewRecipeCreateContainer";
import RecipesContainer from "./recipes/RecipesContainer";

function Content() {
    return (
        <div className={classes.content}>
            <Routes>
                <Route path='/categories/' element={<CategoriesContainer/>}/>
                <Route path='/recipe-create' element={<NewRecipeCreateContainer/>}></Route>
                <Route path='/recipes/*' element={<RecipesContainer/>}></Route>
            </Routes>    
        </div>
    )
};

export default Content;