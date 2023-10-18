import { combineReducers, legacy_createStore as createStore} from "redux";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    mainReducer: mainReducer, 
    }
)


let store = createStore(reducers);
export default store;
