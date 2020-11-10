import { updateBalance, updateSearchFilter, updateSearchValue } from 'redux/actions'
import { store } from 'redux/store'

export const searchFilterOptions = [
  {
    label: 'Incomes',
    value: 'income'
  },
  {
    label: 'Outcomes',
    value: 'outcome'
  },
  {
    label: 'All',
    value: ''
  }
]

export const handleValueChange = (e) => {
  store.dispatch(updateSearchValue(e.target.value))
}

export const handleFilterChange = (filter) => {
  return searchFilterOptions.find(
    ({ label, value }) => label === filter && store.dispatch(updateSearchFilter(value))
  )
}

store.dispatch(updateBalance(100, 'incomes'))
store.dispatch(updateBalance(-100, 'outcomes'))
store.dispatch(updateBalance(100, 'incomes'))
