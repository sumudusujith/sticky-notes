import { API_PATHS, BASE_URL } from "./routesClass";

const axios = require("axios");



// export const configFetchData = () => {
//   return fetch(BASE_URL + API_PATHS.APP_SETTINGS)
//     .then((response) => {
//       if (response.status >= 200 && response.status <= 300) {
//         return response.json()
//       }
//       else {
//         console.log(response.status)
//         window.location.href = "http://localhost:3000/NotFoundPage";
//       }
//     })
//     .then(function (response) {
//       console.log("Initial values : ", response);
//       let configObj = {
//         Main_Header: response.data.noteBoard.Main_Header,

//         //isLoading: response.login?.isLoading,
//       };
//       console.log("VALUES", configObj);
//       return configObj;
//     })
//     .catch((error) => {
//       console.log(error.response.status);
//       return;
//     });
// };
export const configFetchData = () => {
  return axios
    .get(BASE_URL + API_PATHS.APP_SETTINGS, {})
    .then(function (response) {
      return {
        Main_Header: response.data.noteBoard.Main_Header,
      };
    })
    .catch(function (error) {
      return {
        mainHeader: "",
      };
    });
};


export const createNote = (noteId, noteHeader, noteValue) => {
  return axios
    .post(BASE_URL + API_PATHS.ADD_NOTE, {
      noteId: noteId,
      noteHeader: noteHeader,
      noteValue: noteValue,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const editNote = (noteId, noteHeader, noteValue) => {
  return axios
    .post(BASE_URL + API_PATHS.EDIT_NOTE, {
      noteId: noteId,
      noteHeader: noteHeader,
      noteValue: noteValue,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteNote = (noteId) => {
  return axios
    .post(BASE_URL + API_PATHS.DELETE_NOTE, {
      noteId: noteId,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};