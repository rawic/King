import {
  FETCH_TRANSACTIONS_LOADING,
  FETCH_TRANSACTIONS_SUCCESS
} from 'redux/actions/transactionActions'

function fetchTransactions() {
  return (dispatch) => {
    dispatch({ type: FETCH_TRANSACTIONS_LOADING })

    fetch('https://my-json-server.typicode.com/rawic/king/transactions')
      .then((response) => response.json())
      .then((transactions) => dispatch({ type: FETCH_TRANSACTIONS_SUCCESS, payload: transactions }))
  }
}

export default fetchTransactions
