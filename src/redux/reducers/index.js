import { combineReducers } from 'redux'

import { balance } from './balance'
import { notifications } from './notifications'
import { search } from './search'

export default combineReducers({ balance, notifications, search })
