import store from "../store";
// import {
//   setUserData,
// } from "../../utils/utils";
import types from "../types";

const { dispatch } = store;

export const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

export const deleteData = (data) =>{
  dispatch({
    type: types.DELETE,
    payload: data,
  });
} 

export const editData = (data) =>{
  dispatch({
    type: types.EDIT,
    payload: data,
  });
} 

// export const updateInternetConnection = (data) => {
//   dispatch({
//     type: types.NO_INTERNET,
//     payload: data,
//   });
//};


