import {SET_AUTHENTICATED, SET_USER, LOADING_USER, SET_UNAUTHENTICATED} from "../types";

export const initialState = {
    authenticated: false,
    loading: false,
    credentials: {}
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case SET_USER:
        return {
          authenticated: true,
          loading: false,
          ...action.payload
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }