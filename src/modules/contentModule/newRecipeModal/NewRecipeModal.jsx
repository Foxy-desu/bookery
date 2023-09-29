import React from "react";
import classes from "./NewRecipeModal.module.css";

function NewRecipeCreate(props) {

    let optionArray = props.state.allCategories.map((category, index) => {
        return (
            <option categoryIndex={index}>{category.categoryName}</option>
        )
    });

    let nameField = React.createRef();
    let categoryField = React.createRef();
    let recipeField = React.createRef();

    const nameFieldOnChange = ()=>{

    };

    const categoryFieldOnChange = ()=> {

    };

    const recipeFieldOnChange = ()=> {

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
                        <input ref={nameField} className={classes["new-recipe__recipe-name"]} type="text" />
                    </div>

                    <div className={classes["category-wrap"]}>
                        <p className={classes["new-recipe__category-label"]}>Select the right category for it</p>
                        <select ref={categoryField} className={classes["new-recipe__category"]}>
                            <option disabled>Choose a category</option>
                            {optionArray}
                        </select>
                    </div>

                    <div className={classes["recipe-text-wrap"]}>
                        <p className={classes["new-recipe__recipe-text-label"]}>Put it down here</p>
                        <textarea ref={recipeField} className={classes["new-recipe__recipe-text"]} placeholder="Here is my lovely dish..."></textarea>
                    </div>

                    <div className={classes["create-recipe-button-wrap"]}>
                        <button className={classes["new-recipe__create-button"]}>Create a recipe</button>
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