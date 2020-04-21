import { store } from 'redux/store'
import { updateSearchFilter, updateSearchValue } from 'redux/actions'

export const handleValueChange = (e) => store.dispatch(updateSearchValue(e.target.value))

export const handleFilterChange = (filter) => store.dispatch(updateSearchFilter(filter))
