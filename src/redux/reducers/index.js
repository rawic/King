import { combineReducers } from 'redux'

import { balance } from './balance'
import { categories } from './categories'
import { notifications } from './notifications'
import { search } from './search'
import { transactions } from './transactions'

export default combineReducers({ balance, notifications, search, transactions, categories })
