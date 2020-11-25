export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER'
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE'

export const updateSearchFilter = (filter) => ({
  type: UPDATE_SEARCH_FILTER,
  payload: filter
})

export const updateSearchValue = (keyword) => ({
  type: UPDATE_SEARCH_VALUE,
  payload: keyword
})
