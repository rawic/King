import { FETCH_CATEGORIES_LOADING, FETCH_CATEGORIES_SUCCESS } from 'redux/actions/categoryActions'

function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_LOADING })

    fetch('https://my-json-server.typicode.com/rawic/king/categories')
      .then((response) => response.json())
      .then((categories) => dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories }))
  }
}

export default fetchCategories
