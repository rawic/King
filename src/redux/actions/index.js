export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const UPDATE_BALANCE = 'UPDATE_BALANCE'
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER'
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE'
export const UPDATE_TRANSACTIONS = 'UPDATE_TRANSACTIONS'
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION'

export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: notification
})

export const updateBalance = (amount, category) => ({
  type: UPDATE_BALANCE,
  payload: {
    amount,
    category
  }
})

export const updateSearchFilter = (filter) => ({
  type: UPDATE_SEARCH_FILTER,
  payload: filter
})

export const updateSearchValue = (keyword) => ({
  type: UPDATE_SEARCH_VALUE,
  payload: keyword
})

export const editTransaction = (id) => ({
  type: EDIT_TRANSACTION,
  payload: id
})

export const removeTransaction = (id) => ({
  type: REMOVE_TRANSACTION,
  payload: id
})
