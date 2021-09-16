import {
  ADD_NOTE_ACTION,
  EDIT_NOTE_ACTION,
  DELETE_NOTE_ACTION,
  CONFIG_SETTINGS_ACTION, CONFIG_RESPONSE_ACTION, ERROR_ACTION
} from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const configUser = {
  Main_Header: null,
  isLoading: false,
  isError: true,

};


export function addNoteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE_ACTION:
      const newId = uuidv4();
      return [
        ...state,
        {
          noteId: newId,
          noteHeader: action.payload.noteHeader,
          noteValue: action.payload.noteValue,
        },
      ];
  
     case EDIT_NOTE_ACTION:
       const newValue = state.findIndex(
       (note)=> note.noteId === action.payload.noteId
       );
       const newOb = [...state]
       newOb[newValue]=action.payload
       return newOb
  

    case DELETE_NOTE_ACTION:
      return state.filter((notes) => notes.noteId !== action.noteId);
    default:
      return state;
  }
}



export function configValuesReducer(state = configUser, action) {
  switch (action.type) {
    case CONFIG_SETTINGS_ACTION:

      return {

        ...state,
        Main_Header: action.payload.Main_Header,

        isLoading: true,
      };
    case CONFIG_RESPONSE_ACTION:
      return {
        ...state,
        configResponse: action.payload,
        isLoading: false,


      };

    case ERROR_ACTION:

      return {
        ...state,
        isError: false,

      };
    default:
      return state;
  }
}