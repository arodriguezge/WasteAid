import { combineReducers } from 'redux'
import itemsReducers from './itemsReducers'

const rootReducer = combineReducers({
  items: itemsReducers
})

export default rootReducer