import React from "react";
import { Routes, Route } from "react-router-dom";
import classes from "./Content.module.css";
import Categories from '../../modules/contentModule/categories/Categories';
import Recipes from "./recipes/Recipes";
import NewRecipeCreateContainer from "./newRecipeModal/NewRecipeCreateContainer";

function Content(props) {
    return (
        <div className={classes.content}>
            <Routes>
                <Route path='/categories/' element={<Categories/>}/>
    
                <Route path='/recipe-create' element={<NewRecipeCreateContainer/>}></Route>
                <Route path='/recipes/*' element={<Recipes/>}></Route>
            </Routes>    
        </div>
    )
};

export default Content;