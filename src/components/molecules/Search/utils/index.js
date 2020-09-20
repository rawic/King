import { updateSearchFilter, updateSearchValue } from 'redux/actions'
import { store } from 'redux/store'

export const handleValueChange = (e) => store.dispatch(updateSearchValue(e.target.value))

export const handleFilterChange = (filter) => store.dispatch(updateSearchFilter(filter))
