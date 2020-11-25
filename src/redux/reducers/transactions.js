import {
  ADD_TRANSACTION,
  FETCH_TRANSACTIONS_LOADING,
  FETCH_TRANSACTIONS_SUCCESS,
  REMOVE_TRANSACTION
} from 'redux/actions/transactionActions'

const initialState = {
  loading: true,
  transactions: []
}

export const transactions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_LOADING:
      return { ...state, transactions: [], loading: true }
    case FETCH_TRANSACTIONS_SUCCESS:
      return { ...state, transactions: action.payload, loading: false }
    case ADD_TRANSACTION:
      console.log(state)
      return { ...state, transactions: state.transactions.concat(action.payload) }
    case REMOVE_TRANSACTION:
      return { ...state, transactions: state.transactions.filter((t) => t.id !== action.payload) }
    default:
      return state
  }
}
