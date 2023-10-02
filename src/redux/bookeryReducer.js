const CHANGE_CURRENT_RECIPE_NAME_FIELD = 'CHANGE-CURRENT-RECIPE-NAME-FIELD';
const CHANGE_CURRENT_CATEGORY_FIELD = 'CHANGE-CURRENT-CATEGORY-FIELD';
const CHANGE_CURRENT_TEXT_FIELD = 'CHANGE-CURRENT-TEXT-FIELD';
const CREATE_NEW_RECIPE = 'CREATE-NEW-RECIPE';
const CHANGE_CURRENT_NAME_FIELD = 'CHANGE-CURRENT-NAME-FIELD';
const CREATE_NEW_CATEGORY = 'CREATE-NEW-CATEGORY';

function bookeryReducer(state, action) {

    const resetCurrentFields = ()=> {
        state.currentTextField = '';
        state.currentNameField = '';
        state.currentCategoryField = '';
        state.currentRecipeNameField = '';
    }; 

    if (action.type === CREATE_NEW_RECIPE) {
        let newRecipe = {
            recepieId: Number(state.allRecipes.length) + 1,
            recipeName: state.currentRecipeNameField,
            recipeText: state.currentTextField,
            recipeCategory: state.currentCategoryField,
            isFavorite: false,
            thumbnail: '',
            pictures: [],
        };

        state.allRecipes.push(newRecipe);
        state.allCategories.forEach((category)=> {
            if(category.categoryName === newRecipe.recipeCategory){
                category.relatedRecipes.push(newRecipe);
            }
        })
        resetCurrentFields();
        
    }
    else if (action.type === CREATE_NEW_CATEGORY) {
        let newCategory = {
            categoryId: Number(state.allCategories.length) + 1,
            categoryName: state.currentNameField.trim(),
            relatedRecipes: [],
            relatedRecipesCount: '0',
        };

        if(state.currentNameField){
            state.allCategories.push(newCategory);
            resetCurrentFields();
        }
        else {
            return;
        }
    }
    
    else if (action.type === CHANGE_CURRENT_NAME_FIELD) {
        state.currentNameField = action.value;
    }
    else if (action.type === CHANGE_CURRENT_RECIPE_NAME_FIELD) {
        state.currentRecipeNameField = action.value;
    }
    else if (action.type === CHANGE_CURRENT_TEXT_FIELD) {
        state.currentTextField = action.value;
    }
    else if (action.type === CHANGE_CURRENT_CATEGORY_FIELD) {
        state.currentCategoryField = action.value;
    }

    return state;
};

export default bookeryReducer;