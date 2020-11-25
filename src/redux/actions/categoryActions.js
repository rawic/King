export const FETCH_CATEGORIES = 'GET_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_LOADING = 'FETCH_CATEGORIES_LOADING'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category
})

export const removeCategory = (id) => ({
  type: REMOVE_CATEGORY,
  payload: id
})
