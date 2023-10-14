
import { connect } from "react-redux";
import { recipeNameFieldChangeActionCreator, categoryFieldChangeActionCreator,
         recipeTextFieldChangeActionCreator,
         createRecipeActionCreator } from "../../../redux/store";
import NewRecipeCreate from "./NewRecipeCreate";

const mapStateToProps = (state)=> {
    return{
        categories: state.mainReducer.allCategories,
        currentRecipeName: state.mainReducer.currentRecipeNameField,
        currentCategoryName: state.mainReducer.currentCategoryField,
        currentTextField: state.mainReducer.currentTextField,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return{
        recipeNameFieldOnChange: (text)=> {
            dispatch(recipeNameFieldChangeActionCreator(text))
        },
        categoryFieldOnChange: (text)=> {
            dispatch(categoryFieldChangeActionCreator(text));
        },
        recipeFieldOnChange: (text)=>{
            dispatch(recipeTextFieldChangeActionCreator(text))
        },
        createRecipe: ()=>{
            dispatch(createRecipeActionCreator())
        }

    }
}

const NewRecipeCreateContainer = connect(mapStateToProps, mapDispatchToProps)(NewRecipeCreate);

export default NewRecipeCreateContainer;

let state = window.state;