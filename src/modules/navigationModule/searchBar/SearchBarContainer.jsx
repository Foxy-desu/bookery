import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { changeCurrentNameFieldActionCreator, createNewCategoryActionCreator } from "../../../redux/store";

const mapStateToProps = (state)=> {
    return{
        currentNameField: state.mainReducer.currentNameField,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        inputOnChange: (text)=>{
            dispatch(changeCurrentNameFieldActionCreator(text));
        },
        createCategory: ()=>{
            dispatch(createNewCategoryActionCreator());
        }
    }
};

const SearchBarContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBar);

export default SearchBarContainer;