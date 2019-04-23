import { combineReducers } from 'redux'
import itemsReducers from './itemsReducers'
import usersReducers from './usersReducers'
import ticketsReducers from './ticketsReducers'

const rootReducer = combineReducers({
  items: itemsReducers,
  users: usersReducers,
  tickets: ticketsReducers
})

export default rootReducer