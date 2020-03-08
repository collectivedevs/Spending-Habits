import React, { useContext } from "react";
import axios from "axios";
import {LOADING_UI, CLEAR_ERRORS, SET_ERRORS, SET_USER, LOADING_USER, SET_UNAUTHENTICATED} from "../types";

export const loginUser = (userData, history) => dispatch => {
  
  dispatch({ type: LOADING_UI });
  console.log("passed dispatch func");
  axios
    .post("/login", userData)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      getUserData();
      dispatch({ type: CLEAR_ERRORS });

      console.log("went inside axios funct");
      // This is a method of pushing state and redirecting to it
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
      console.log("went in err");
    });
};

export const getUserData = () => dispatch => {
    dispatch({ type: LOADING_USER });
    axios
      .get("/user")
      .then(res => {
        dispatch({
          type: SET_USER,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };

export const logoutUser = () => dispatch => {
    
    localStorage.removeItem("FBIdToken");
    delete axios.defaults.headers.common["Authorization"];
    dispatch({ type: SET_UNAUTHENTICATED });
  };

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
