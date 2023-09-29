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
                relatedRecipesCount: '1',
            },
            {
                categoryId: 2,
                categoryName: 'Salads',
                relatedRecipes: [],
                relatedRecipesCount: '0',
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
                relatedRecipesCount: '1',
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
    },
// доделать метод позднее
    createNewRecipe(){
        let newRecepie = {
            recepieId: Number(this.state.allRecipes.length) + 1,
            recipeName: this.state.currentRecipeNameField,
            recipeText: this.state.currentTextField,
            recipeCategory: this.state.currentCategoryField,
            isFavorite: false,
            thumbnail: '',
            pictures: [],
        };

        this.state.allRecipes.push(newRecepie);
        this._resetCurrentFields();
        this._callSubscriber(this.state);
    },

    createNewCategory(){
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
    },

    changeCurrentNameField(value){
        this.state.currentNameField = value;
        this._callSubscriber(this.state);
    },

    changeCurrentRecipeNameField(value){
        this.state.currentRecipeNameField = value;
        this._callSubscriber(this.state);
    },

    changeCurrentTextField(value){
        this.state.currentTextField = value;
        this._callSubscriber(this.state);
    },

    changeCurrentCategoryField(value){
        this.state.currentCategoryField = value;
        this._callSubscriber(this.state);
    },


    setSubscriber(observer){
        this._callSubscriber = observer;
    },
};

export default store;