import { ADD_NOTIFICATION } from 'redux/actions/notificationActions'

const initialState = [
  {
    id: 1,
    type: 'income',
    message: '',
    amount: '45,00',
    created: '23:42'
  },
  {
    id: 2,
    type: 'income',
    message: '',
    amount: '45,00',
    created: '23:42'
  },
  {
    id: 3,
    type: 'outcome',
    message: '',
    amount: '14,49',
    created: '15:32'
  }
]

export const notifications = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { ...state, notification: action.payload }
    default:
      return state
  }
}
