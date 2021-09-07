import { combineReducers } from "redux";
import { addNoteReducer, configValuesReducer } from "./noteReducer";

const rootReducer = combineReducers({
  notes: addNoteReducer,
  configValuesReducer: configValuesReducer,
});

export default rootReducer;