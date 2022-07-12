import { combineReducers } from "redux";
import calculatorReducer from "./calculatorReducer";


const rootReducer = combineReducers({calcReducer : calculatorReducer});

export default rootReducer;