import { combineReducers, legacy_createStore as createStore} from "redux";
import mainReducer from "./bookeryReducer";

let reducers = combineReducers({
    mainReducer: mainReducer, 
    }
)


let store = createStore(reducers);
export default store;
