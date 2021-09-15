import {
    ADD_NOTE_ACTION,
    EDIT_NOTE_ACTION,
    DELETE_NOTE_ACTION,
    CONFIG_SETTINGS_ACTION, ERROR_ACTION,LOADER_ACTION 
  } from "./actionTypes";
  
  export function addNote(noteHeader, noteValue) {
    return {
      type: ADD_NOTE_ACTION,
      payload: {
        noteHeader,
        noteValue,
      },
    };
  }
  
  export function updateNote(noteId, noteHeader, noteValue) {
    console.log("UPDATE Values", noteId, noteHeader, noteValue);
    return {
      type: EDIT_NOTE_ACTION,
      payload: {
        noteId,
        noteHeader,
        noteValue,
      },
    };
  }
  
  export function deleteNote(noteId) {
    console.log("Note Deleted", noteId,);
    return {
      type: DELETE_NOTE_ACTION,
      noteId,
    };
  }
  

  export function getconfigAction(Main_Header) {
    return {
        type: CONFIG_SETTINGS_ACTION,
        payload: {
            Main_Header
            
        }
    };
}
export function errorAction(configData) {
    return {
        type: ERROR_ACTION,
        payload: {
            configData

        }
    };
}
export function getLoadAction(configData) {
    return {
        type: LOADER_ACTION,
        payload: {configData
            
        }
    };
}