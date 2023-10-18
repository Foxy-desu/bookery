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

    const resetCurrentFields = (stateCopy) => {
        stateCopy.currentTextField = '';
        stateCopy.currentNameField = '';
        stateCopy.currentCategoryField = '';
        stateCopy.currentRecipeNameField = '';
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

            const stateCopy = JSON.parse(JSON.stringify(state));

            if (stateCopy.currentRecipeNameField && state.currentCategoryField) {
                
                stateCopy.allRecipes.push(newRecipe);
                stateCopy.allCategories.forEach((category) => {

                    if (category.categoryName === newRecipe.recipeCategory) {
                        category.relatedRecipes.push(newRecipe);
                    }
                })
                resetCurrentFields(stateCopy);
            }
            return stateCopy;
        };
        case CREATE_NEW_CATEGORY: {
            let newCategory = {
                categoryId: Number(state.allCategories.length) + 1,
                categoryName: state.currentNameField.trim(),
                relatedRecipes: [],
                relatedRecipesCount: '0',
            };

            const stateCopy = {
                ...state,
                allRecipes: [
                    ...state.allRecipes,
                ],
                allCategories: [
                    ...state.allCategories,
                    
                ],
            };

            if (stateCopy.currentNameField) {
                stateCopy.allCategories.push(newCategory);
                resetCurrentFields(stateCopy);
            }
            else {

                return stateCopy;
            }
            return stateCopy;
        }
        case CHANGE_CURRENT_NAME_FIELD: {
            return {...state, currentNameField: action.value};
        }
        case CHANGE_CURRENT_RECIPE_NAME_FIELD: {
            return {...state, currentRecipeNameField: action.value};
        }
        case CHANGE_CURRENT_TEXT_FIELD: {
            return {...state, currentTextField: action.value};
        }
        case CHANGE_CURRENT_CATEGORY_FIELD: {
            return {...state, currentCategoryField: action.value};
        }
        default: 
            return state;
    };
    
};

export default mainReducer;