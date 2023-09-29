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
        if (action.type === 'CREATE-NEW-RECIPE') {
            let newRecipe = {
                recepieId: Number(this.state.allRecipes.length) + 1,
                recipeName: this.state.currentRecipeNameField,
                recipeText: this.state.currentTextField,
                recipeCategory: this.state.currentCategoryField,
                isFavorite: false,
                thumbnail: '',
                pictures: [],
            };
    
            this.state.allRecipes.push(newRecipe);
            this.state.allCategories.forEach((category)=> {
                if(category.categoryName === newRecipe.recipeCategory){
                    category.relatedRecipes.push(newRecipe);
                }
            })
            this._resetCurrentFields();
            this._callSubscriber(this.state);
        }
        else if (action.type === 'CREATE-NEW-CATEGORY') {
            let newCategory = {
                categoryId: Number(this.state.allCategories.length) + 1,
                categoryName: this.state.currentNameField.trim(),
                relatedRecipes: [],
                relatedRecipesCount: '0',
            };
    
            if(this.state.currentNameField){
                this.state.allCategories.push(newCategory);
                this._resetCurrentFields();
                this._callSubscriber(this.state);
            }
            return;
        }
        else if (action.type === 'CHANGE-CURRENT-NAME-FIELD') {
            this.state.currentNameField = action.value;
            this._callSubscriber(this.state);
        }
        else if (action.type === 'CHANGE-CURRENT-RECIPE-NAME-FIELD') {
            this.state.currentRecipeNameField = action.value;
            this._callSubscriber(this.state);
        }
        else if (action.type === 'CHANGE-CURRENT-TEXT-FIELD') {
            this.state.currentTextField = action.value;
            this._callSubscriber(this.state);
        }
        else if (action.type === 'CHANGE-CURRENT-CATEGORY-FIELD') {
            this.state.currentCategoryField = action.value;
            this._callSubscriber(this.state);
        }
    },

    // createNewRecipe(){
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
    // },

    // createNewCategory(){
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
    // },

    // changeCurrentNameField(value){
    //     this.state.currentNameField = value;
    //     this._callSubscriber(this.state);
    // },

    // changeCurrentRecipeNameField(value){
    //     this.state.currentRecipeNameField = value;
    //     this._callSubscriber(this.state);
    // },

    // changeCurrentTextField(value){
    //     this.state.currentTextField = value;
    //     this._callSubscriber(this.state);
    // },

    // changeCurrentCategoryField(value){
    //     this.state.currentCategoryField = value;
    //     this._callSubscriber(this.state);
    // },


    setSubscriber(observer){
        this._callSubscriber = observer;
    },
};

window.store = store;

export default store;