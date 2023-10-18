import mainReducer from "./mainReducer";

const CHANGE_CURRENT_RECIPE_NAME_FIELD = 'CHANGE-CURRENT-RECIPE-NAME-FIELD';
const CHANGE_CURRENT_CATEGORY_FIELD = 'CHANGE-CURRENT-CATEGORY-FIELD';
const CHANGE_CURRENT_TEXT_FIELD = 'CHANGE-CURRENT-TEXT-FIELD';
const CREATE_NEW_RECIPE = 'CREATE-NEW-RECIPE';
const CHANGE_CURRENT_NAME_FIELD = 'CHANGE-CURRENT-NAME-FIELD';
const CREATE_NEW_CATEGORY = 'CREATE-NEW-CATEGORY';

const store = {
    state: {
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
    },
    _callSubscriber(){},
    _resetCurrentFields(){
        this.state.currentTextField = '';
        this.state.currentNameField = '';
        this.state.currentCategoryField = '';
        this.state.currentRecipeNameField = '';
    },

    dispatch(action){

        this.state = mainReducer(this.state, action);

        // if (action.type === CREATE_NEW_RECIPE) {
        //     let newRecipe = {
        //         recepieId: Number(this.state.allRecipes.length) + 1,
        //         recipeName: this.state.currentRecipeNameField,
        //         recipeText: this.state.currentTextField,
        //         recipeCategory: this.state.currentCategoryField,
        //         isFavorite: false,
        //         thumbnail: '',
        //         pictures: [],
        //     };
    
        //     this.state.allRecipes.push(newRecipe);
        //     this.state.allCategories.forEach((category)=> {
        //         if(category.categoryName === newRecipe.recipeCategory){
        //             category.relatedRecipes.push(newRecipe);
        //         }
        //     })
        //     this._resetCurrentFields();
        //     this._callSubscriber(this.state);
        // }
        // else if (action.type === CREATE_NEW_CATEGORY) {
        //     let newCategory = {
        //         categoryId: Number(this.state.allCategories.length) + 1,
        //         categoryName: this.state.currentNameField.trim(),
        //         relatedRecipes: [],
        //         relatedRecipesCount: '0',
        //     };
    
        //     if(this.state.currentNameField){
        //         this.state.allCategories.push(newCategory);
        //         this._resetCurrentFields();
        //         this._callSubscriber(this.state);
        //     }
        //     return;
        // }
        // else if (action.type === CHANGE_CURRENT_NAME_FIELD) {
        //     this.state.currentNameField = action.value;
        //     this._callSubscriber(this.state);
        // }
        // else if (action.type === CHANGE_CURRENT_RECIPE_NAME_FIELD) {
        //     this.state.currentRecipeNameField = action.value;
        //     this._callSubscriber(this.state);
        // }
        // else if (action.type === CHANGE_CURRENT_TEXT_FIELD) {
        //     this.state.currentTextField = action.value;
        //     this._callSubscriber(this.state);
        // }
        // else if (action.type === CHANGE_CURRENT_CATEGORY_FIELD) {
        //     this.state.currentCategoryField = action.value;
        //     this._callSubscriber(this.state);
        // }

        this._callSubscriber(this.state);
    },

    setSubscriber(observer){
        this._callSubscriber = observer;
    },
};

export const recipeNameFieldChangeActionCreator = (text)=> {
    return ({type:CHANGE_CURRENT_RECIPE_NAME_FIELD, value: text})
};

export const categoryFieldChangeActionCreator = (text)=> {
    return ({type: CHANGE_CURRENT_CATEGORY_FIELD, value: text})
};

export const recipeTextFieldChangeActionCreator = (text)=> {
    return ({type: CHANGE_CURRENT_TEXT_FIELD, value: text});
};

export const createRecipeActionCreator = ()=> {
    return ({type: CREATE_NEW_RECIPE});
}

export const changeCurrentNameFieldActionCreator = (text) => {
    return ({type: CHANGE_CURRENT_NAME_FIELD, value: text});
};

export const createNewCategoryActionCreator = ()=> {
    return ({type: CREATE_NEW_CATEGORY});
};

window.store = store;
export default store;