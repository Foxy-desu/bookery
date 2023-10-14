const CHANGE_CURRENT_RECIPE_NAME_FIELD = 'CHANGE-CURRENT-RECIPE-NAME-FIELD';
const CHANGE_CURRENT_CATEGORY_FIELD = 'CHANGE-CURRENT-CATEGORY-FIELD';
const CHANGE_CURRENT_TEXT_FIELD = 'CHANGE-CURRENT-TEXT-FIELD';
const CREATE_NEW_RECIPE = 'CREATE-NEW-RECIPE';
const CHANGE_CURRENT_NAME_FIELD = 'CHANGE-CURRENT-NAME-FIELD';
const CREATE_NEW_CATEGORY = 'CREATE-NEW-CATEGORY';

const initialState = {
    allRecipes: [
        {
            recepieId: 1,
            recipeName: 'Cheese soup',
            recipeText: 'text tex tex tex tex tex tex tex text',
            recipeCategory: 'Soups',
            isFavorite: true,
            thumbnail: '',
            pictures: [],
        },
        {
            recepieId: 2,
            recipeName: 'Domestic Beer',
            recipeText: 'text tex tex tex tex tex tex tex text',
            recipeCategory: 'Drinks',
            isFavorite: true,
            thumbnail: '',
            pictures: [],
        },
    ],
    allCategories: [
        {
            categoryId: 1,
            categoryName: 'Soups',
            relatedRecipes: [
                {
                    recepieId: 1,
                    recipeName: 'Cheese soup',
                    recipeText: 'text tex tex tex tex tex tex tex text',
                    recipeCategory: 'Soups',
                    isFavorite: true,
                    thumbnail: '',
                    pictures: [],
                },
            ],
        },
        {
            categoryId: 2,
            categoryName: 'Salads',
            relatedRecipes: [],
        },
        {
            categoryId: 3,
            categoryName: 'Drinks',
            relatedRecipes: [
                {
                    recepieId: 2,
                    recipeName: 'Domestic Beer',
                    recipeText: 'text tex tex tex tex tex tex tex text',
                    recipeCategory: 'Drinks',
                    isFavorite: true,
                    thumbnail: '',
                    pictures: [],
                },
            ],
        }
    ],
    favoriteRecipes: [
        {
            recepieId: 1,
            recipeName: 'Cheese soup',
            recipeText: 'text tex tex tex tex tex tex tex text',
            recipeCategory: 'Soups',
            isFavorite: true,
            thumbnail: '',
            pictures: [],
        },
    ],
    currentTextField: '',
    currentNameField: '',
    currentCategoryField: '',
    currentRecipeNameField: '',
};



function mainReducer(state = initialState, action) {

    const resetCurrentFields = () => {
        state.currentTextField = '';
        state.currentNameField = '';
        state.currentCategoryField = '';
        state.currentRecipeNameField = '';
    };

    switch (action.type) {
        case CREATE_NEW_RECIPE: {
            let newRecipe = {
                recepieId: Number(state.allRecipes.length) + 1,
                recipeName: state.currentRecipeNameField,
                recipeText: state.currentTextField,
                recipeCategory: state.currentCategoryField,
                isFavorite: false,
                thumbnail: '',
                pictures: [],
            };

            if (state.currentRecipeNameField && state.currentCategoryField) {
                state.allRecipes.push(newRecipe);
                state.allCategories.forEach((category) => {

                    if (category.categoryName === newRecipe.recipeCategory) {
                        category.relatedRecipes.push(newRecipe);
                    }
                })
                resetCurrentFields();
            }
            return state;
        };
        case CREATE_NEW_CATEGORY: {
            let newCategory = {
                categoryId: Number(state.allCategories.length) + 1,
                categoryName: state.currentNameField.trim(),
                relatedRecipes: [],
                relatedRecipesCount: '0',
            };

            if (state.currentNameField) {
                state.allCategories.push(newCategory);
                resetCurrentFields();
            }
            else {

                return state;
            }
            return state;
        }
        case CHANGE_CURRENT_NAME_FIELD: {
            state.currentNameField = action.value
            return state;
        }
        case CHANGE_CURRENT_RECIPE_NAME_FIELD: {
            state.currentRecipeNameField = action.value
            return state;
        }
        case CHANGE_CURRENT_TEXT_FIELD: {
            state.currentTextField = action.value
            return state;
        }
        case CHANGE_CURRENT_CATEGORY_FIELD: {
            state.currentCategoryField = action.value
            return state;
        }
        default: 
            return state;
    };
    
};

export default mainReducer;