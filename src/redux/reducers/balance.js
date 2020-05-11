import { UPDATE_BALANCE } from 'redux/actions'

const initialState = {
  incomes: {
    amount: 2481.62,
    percentage: 28.57
  },
  outcomes: {
    amount: 868.48,
    percentage: -16.21
  },
  saved: {
    amount: 1612.14,
    percentage: 31.98
  },
  total: 3091.51
}

export const balance = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BALANCE:
      return { ...state, incomes: action.payload }
    default:
      return state
  }
}
