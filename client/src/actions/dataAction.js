import {
    SET_TRANSACTIONS,
    SET_TRANSACTION,
    STOP_LOADING_UI,
    LOADING_DATA,
    DELETE_TRANSACTION,
    SET_ERRORS,
    CLEAR_ERRORS,
    CREATE_TRANSACTION,
    LOADING_UI
  } from "../types";
  import axios from "axios";

  import {setAuthorizationHeader} from "./userAction";
  
  // Get all Transactions
  export const getTransactions = (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get("/transactions")
      .then(res => {
        dispatch({
          type: SET_TRANSACTIONS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: SET_TRANSACTIONS,
          payload: []
        });
      });
  };
  
  // Create a Post
  
  export const createTransaction = (newTransaction, dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post("/transactions", newTransaction)
      .then(res => {
        dispatch({
          type: CREATE_TRANSACTION,
          payload: res.data
        });
        clearErrors(dispatch);
      })
      .catch(err => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };
  
  // Get all Transaction data (single transaction info)
  
  export const getTransaction = (transactionId, dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`/transaction/${transactionId}`)
      .then(res => {
        dispatch({
          type: SET_TRANSACTION,
          payload: res.data
        });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch(err => console.log(err));
  };
  
  // Delete a Transaction
  export const deleteTransaction = (transactionId, dispatch) => {
    axios
      .delete(`/transaction/${transactionId}`)
      .then(() => {
        dispatch({ type: DELETE_TRANSACTION, payload: transactionId });
      })
      .catch(err => console.log(err));
  };
  
  export const clearErrors = (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  