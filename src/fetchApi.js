import { API_PATHS, BASE_URL } from "./routesClass.js";

const axios = require("axios");

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
        Main_Header: "",
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

export const updateNote = (noteId, noteHeader, noteValue) => {
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


// export const getData = (email, password) => {
//   return fetch(user_url + `/user-service/login`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password })
//   })
//     .then((response) => {
//       if (response.status >= 200 && response.status <= 300) {
//         response.json()
//       } else {
//         throw new Error(response.status)
//       }
//     })
//     .then(function setValues(response) {
//       console.log(response);
//       return response;
//     })
// };

// export const configFetchData = () => {
//   return fetch(user_url + "/app-settings")
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
//         login_Header: response.login?.login_Header,
//         login_SubHeader: response.login?.login_SubHeader,
//         dashboard_Header: response.dashboard?.dashboard_Header,
//         isLoading: response.login?.isLoading,
//       };
//       console.log("VALUES", configObj);
//       return configObj;
//     })
//     .catch((error) => {
//       console.log(error.response.status);
//       return;
//     });
// };

