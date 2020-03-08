import {LOADING_UI, CLEAR_ERRORS, SET_ERRORS, STOP_LOADING_UI} from "../types";

export const initialState = {
    loading: false,
    errors: null
  };
  
  export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ERRORS:
        return {
          ...state,
          loading: false,
          errors: action.payload
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          loading: false,
          errors: null
        };
      case LOADING_UI:
        return {
          ...state,
          loading: true
        };
      case STOP_LOADING_UI:
        return { ...state, loading: false };
      default:
        return state;
    }
  }
  