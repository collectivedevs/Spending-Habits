import {
  SET_TRANSACTIONS,
  SET_TRANSACTION,
  LOADING_DATA,
  DELETE_TRANSACTION,
  CREATE_TRANSACTION,
} from "../types";

export const initialState = {
  transactions: [],
  transaction: {},
  data_loading: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        data_loading: true,
      };
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        data_loading: false,
      };
    case SET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };
    case DELETE_TRANSACTION:
      let transactionIndex = state.transactions.findIndex(
        (transaction) => transaction.transactionId === action.payload
      );
      state.transactions.splice(transactionIndex, 1);
      return {
        ...state,
      };
    case CREATE_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}
