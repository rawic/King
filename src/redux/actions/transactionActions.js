export const FETCH_TRANSACTIONS = 'GET_TRANSACTIONS'
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS'
export const FETCH_TRANSACTIONS_LOADING = 'FETCH_TRANSACTIONS_LOADING'
export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const UPDATE_TRANSACTIONS = 'UPDATE_TRANSACTIONS'
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION'

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction
})

export const editTransaction = (id) => ({
  type: EDIT_TRANSACTION,
  payload: id
})

export const removeTransaction = (id) => ({
  type: REMOVE_TRANSACTION,
  payload: id
})
