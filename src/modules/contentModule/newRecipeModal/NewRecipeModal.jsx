import React from "react";
import classes from "./NewRecipeModal.module.css";
import { recipeNameFieldChangeActionCreator, categoryFieldChangeActionCreator,
         recipeTextFieldChangeActionCreator,
         createRecipeActionCreator } from "../../../redux/store";

function NewRecipeCreate(props) {

    let optionArray = props.state.allCategories.map((category, index) => {
        return (
            <option categoryname={category.categoryName} categoryindex={index}>{category.categoryName}</option>
        )
    });

    let recipeNameField = React.createRef();
    let categoryField = React.createRef();
    let recipeField = React.createRef();

    const recipeNameFieldOnChange = ()=>{
        let text = recipeNameField.current.value;
        let action = recipeNameFieldChangeActionCreator(text)
        props.dispatch(action);
    };

    const categoryFieldOnChange = ()=> {
        let text = categoryField.current.value;
        let action = categoryFieldChangeActionCreator(text)
        props.dispatch(action);
    };

    const recipeFieldOnChange = ()=> {
        let text = recipeField.current.value;
        let action = recipeTextFieldChangeActionCreator(text)
        props.dispatch(action);
    };

    const createRecipe = ()=> {
        let action = createRecipeActionCreator() 
        props.dispatch(action);
    };

    return (

        <div className={classes["new-recipe__wrap"]}>
            <div className={classes["new-recipe__title-wrap"]}>
                <h2 className={classes["new-recipe__title-text"]}>New Recipe</h2>
            </div>
            <div className={classes["new-recipe__recipe-info-wrap"]}>
                <div className={classes["new-recipe__recipe-info"]}>

                    <div className={classes["name-wrap"]}>
                        <p className={classes["new-recipe__name-label"]}>Give your pretty recipe a name</p>
                        <input className={classes["new-recipe__recipe-name"]} ref={recipeNameField} value={props.state.currentRecipeNameField} onChange={recipeNameFieldOnChange} type="text" />
                    </div>

                    <div className={classes["category-wrap"]}>
                        <p className={classes["new-recipe__category-label"]}>Select the right category for it</p>
                        <select className={classes["new-recipe__category"]} ref={categoryField} value={props.state.currentCategoryField} onChange={categoryFieldOnChange} >
                            <option hidden>Choose a category</option>
                            {optionArray}
                        </select>
                    </div>

                    <div className={classes["recipe-text-wrap"]}>
                        <p className={classes["new-recipe__recipe-text-label"]}>Put it down here</p>
                        <textarea className={classes["new-recipe__recipe-text"]} ref={recipeField} value={props.state.currentTextField} onChange={recipeFieldOnChange} placeholder="Here is my lovely dish..."></textarea>
                    </div>



                    <div className={classes["create-recipe-button-wrap"]}>
                        <button className={classes["new-recipe__create-button"]} type="button" onClick={createRecipe}>Create a recipe</button>
                    </div>


                </div>
                <div className={classes["new-recipe__recipe-photo"]}>
                    <div>
                        <p>Pending...</p>
                        <div className={classes["thumbnail"]}></div>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default NewRecipeCreate;