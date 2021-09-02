import {ADD_NOTE_ACTION, EDIT_NOTE_ACTION, DELETE_NOTE_ACTION,} from "./actionTypes";
  
  export function addNote( note) {
    return {
      type: ADD_NOTE_ACTION,
      payload: {
        
        note,
      },
    };
  }
  
  export function editNote( note) {
    return {
      type: EDIT_NOTE_ACTION,
      payload: {
        
        note,
      },
    };
  }
  
  export function deleteNote() {
    return {
      type: DELETE_NOTE_ACTION,
      payload: {},
    };
  }
  