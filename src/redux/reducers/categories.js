import {
  ADD_CATEGORY,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_SUCCESS,
  REMOVE_CATEGORY
} from 'redux/actions/categoryActions'

const initialState = {
  loading: true,
  categories: []
}

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_LOADING:
      return { ...state, categories: [], loading: true }
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, loading: false }
    case ADD_CATEGORY:
      return { ...state, categories: state.concat(action.payload) }
    case REMOVE_CATEGORY:
      return { ...state, categories: state.filter((t) => t.id !== action.payload) }
    default:
      return state
  }
}
