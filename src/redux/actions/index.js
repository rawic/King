export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const UPDATE_BALANCE = 'UPDATE_BALANCE'
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER'
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE'

export const addNotification = (notification) => ({
  type: 'ADD_NOTIFICATION',
  payload: notification
})

export const updateBalance = (amount) => ({
  type: 'UPDATE_BALANCE',
  payload: amount
})

export const updateSearchFilter = (filter) => ({
  type: 'UPDATE_SEARCH_FILTER',
  payload: filter
})

export const updateSearchValue = (keyword) => ({
  type: 'UPDATE_SEARCH_VALUE',
  payload: keyword
})
