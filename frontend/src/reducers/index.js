import { combineReducers } from 'redux'
import itemsReducers from './itemsReducers'
import usersReducers from './usersReducers'

const rootReducer = combineReducers({
  items: itemsReducers,
  users: usersReducers
})

export default rootReducer