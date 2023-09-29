import React from "react";
import { Routes, Route } from "react-router-dom";
import classes from "./Content.module.css";
import Categories from '../../modules/contentModule/categories/Categories';
import NewRecipeCreate from "./newRecipeModal/NewRecipeModal";

function Content(props) {
    return (
        <div className={classes.content}>
            <Routes>
                <Route path='/categories/*' element={<Categories state={props.state}/>}/>
                <Route path='/recipe-create' element={<NewRecipeCreate state={props.state}
                                                                        changeCurrentRecipeNameField={props.changeCurrentRecipeNameField}
                                                                        createNewRecipe={props.createNewRecipe}
                                                                        changeCurrentTextField={props.changeCurrentTextField}
                                                                        changeCurrentCategoryField={props.changeCurrentCategoryField}/>}></Route>
            </Routes>    
        </div>
    )
};

export default Content;