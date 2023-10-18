import Recipes from "./Recipes";
import {connect} from "react-redux";

const mapStateToProps = (state)=> {
    return {
        recipesCount: state.mainReducer.allRecipes.length,
    }
};
const mapDispatchToProps = (dispatch)=> {
    return {

    }
};

const RecipesContainer = connect(mapStateToProps, mapDispatchToProps)(Recipes);

export default RecipesContainer;