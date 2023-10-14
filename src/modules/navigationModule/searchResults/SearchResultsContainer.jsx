import SearchResults from "./SearchResults";
import { connect } from "react-redux";


let mapStateToProps = (state)=>{
    console.log(state);
    return{
        categories: state.mainReducer.allCategories,
    };
};

let mapDispatchToProps = (dispatch)=>{
    return{}
};

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults);


export default SearchResultsContainer;
