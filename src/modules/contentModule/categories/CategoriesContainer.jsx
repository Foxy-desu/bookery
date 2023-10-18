import Categories from "./Categories";
import { connect } from "react-redux";

const mapStateToProps = (state)=> {
    return {
        categories: state.mainReducer.allCategories,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;