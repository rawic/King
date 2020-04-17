const initialState = {
  filterBy: 'all',
  value: ''
}

export const search = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_FILTER':
      return { ...state, filterBy: action.payload }
    case 'UPDATE_SEARCH_VALUE':
      return { ...state, value: action.payload }
    default:
      return state
  }
}
