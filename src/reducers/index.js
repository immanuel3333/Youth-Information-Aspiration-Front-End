import {combineReducers} from 'redux'
import newsReducer from './news_reducer'
import auth from './auth_reducer'
import message from './message_reducer'

export default combineReducers({
    news : newsReducer,
    auth,
    message
})