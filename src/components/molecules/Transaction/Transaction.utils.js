import { removeTransaction } from 'redux/actions/transactionActions'
import { store } from 'redux/store'

export const handleTransactionAction = (id) => (action) => {
  const actionType = action.toLowerCase()
  if (actionType === 'remove') {
    return store.dispatch(removeTransaction(id))
  }
}

export const transactionActions = [
  { label: 'Edit', value: 'edit', icon: { name: 'pen', color: '#3160FF' } },
  { label: 'Remove', value: 'remove', icon: { name: 'trash', color: '#FF4883' } }
]
