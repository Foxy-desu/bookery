import React from "react";
import { Routes, Route } from "react-router-dom";
import classes from "./Content.module.css";
import Categories from '../../modules/contentModule/categories/Categories';
import NewRecipeCreate from "./newRecipeModal/NewRecipeModal";
import Recipes from "./recipes/Recipes";
function Content(props) {
    return (
        <div className={classes.content}>
            <Routes>
                <Route path='/categories/*' element={<Categories state={props.state}/>}/>
                <Route path='/recipe-create' element={<NewRecipeCreate state={props.state}
                                                                        dispatch={props.dispatch}/>}></Route>
                <Route path='/recipes/*' element={<Recipes state={props.state}/>}></Route>
            </Routes>    
        </div>
    )
};

export default Content;