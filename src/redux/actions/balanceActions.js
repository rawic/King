export const UPDATE_BALANCE = 'UPDATE_BALANCE'

export const updateBalance = (amount, category) => ({
  type: UPDATE_BALANCE,
  payload: {
    amount,
    category
  }
})
