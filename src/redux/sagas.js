import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  ADD_NOTE_ACTION,
  ADD_NOTE_ACTION_SUCCESS,
  EDIT_NOTE_ACTION,
  EDIT_NOTE_ACTION_SUCCESS,
  DELETE_NOTE_ACTION,
  DELETE_NOTE_ACTION_SUCCESS,
  CONFIG_RESPONSE_ACTION, CONFIG_SETTINGS_ACTION,ERROR_ACTION
} from "./actions/actionTypes";
import {
  createNote,
  editNote,
  updateNote,
  deleteNote,
  configFetchData,
} from "../fetchApi";

export function* cddSaga({ payload }) {
    try {
      const configData = yield call(configFetchData, payload.Main_Header);
      if(configData.login_Header === ""){
        console.log("LOGIN HEADER IS NULL");
        yield put({ type: ERROR_ACTION, payload: configData });
      }else{
      yield put({ type: CONFIG_RESPONSE_ACTION, payload: configData });}
    }catch (e) {
    }
  }

export function* addNoteSaga({ payload }) {
  try {
    const note = yield call(
      createNote,
      payload.noteId,
      payload.noteHeader,
      payload.noteValue
    );
    yield put({ type: ADD_NOTE_ACTION_SUCCESS, payload: note });
  } catch (e) {
    //console.log("Error occurred ", e.message);
  }
}

export function* editNoteSaga({ payload }) {
  try {
    const note = yield call(
      updateNote,
      payload.noteId,
      payload.noteHeader,
      payload.noteValue
    );
    yield put({ type: EDIT_NOTE_ACTION_SUCCESS, payload: note });
  } catch (e) {
    console.log("Error occurred ", e.message);
  }
}

export function* deleteNoteSaga({ payload }) {
  try {
    const note = yield call(deleteNote, payload.noteId);
    yield put({ type: DELETE_NOTE_ACTION_SUCCESS, payload: note });
  } catch (e) {
    //console.log("Error occurred ", e.message);
  }
}

export function* mySaga() {
    yield takeLatest(CONFIG_SETTINGS_ACTION, cddSaga);
  yield takeLatest(ADD_NOTE_ACTION, addNoteSaga);
  yield takeLatest(EDIT_NOTE_ACTION, editNoteSaga);
  yield takeLatest(DELETE_NOTE_ACTION, deleteNoteSaga);
}