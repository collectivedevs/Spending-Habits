import axios from "axios";
import {LOADING_UI, CLEAR_ERRORS, SET_ERRORS, SET_USER, LOADING_USER, SET_UNAUTHENTICATED} from "../types";

export const loginUser = (userData, history, dispatch) => {
  
  dispatch({ type: LOADING_UI });
  
  axios
    .post("/login", userData)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      getUserData(dispatch);
      dispatch({ type: CLEAR_ERRORS });

      // This is a method of pushing state and redirecting to it
      history.push("/home");
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getUserData = (dispatch) => {
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

  export const signupUser = (newUserData, history, dispatch) => {

    dispatch({ type: LOADING_UI });

    axios
      .post("/signup", newUserData)
      .then(res => {
        setAuthorizationHeader(res.data.token);
        getUserData(dispatch);
        dispatch({ type: CLEAR_ERRORS });
        // This is a method of pushing state and redirecting to it
        history.push("/home");
      })
      .catch(err => {
        
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };

  export const uploadImage = (formData, dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .post("/user/image", formData)
      .then(() => {
        getUserData(dispatch);
      })
      .catch(err => console.log(err));
  };

export const logoutUser = (dispatch) => {
    
    localStorage.removeItem("FBIdToken");
    delete axios.defaults.headers.common["Authorization"];
    dispatch({ type: SET_UNAUTHENTICATED });
  };

export const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
