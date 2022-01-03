import {combineReducers} from 'redux'
import newsReducer from './news_reducer'

export default combineReducers({
    news : newsReducer
})