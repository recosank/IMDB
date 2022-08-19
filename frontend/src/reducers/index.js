import { combineReducers } from 'redux'
import trailers from './trailers'
import User from './User'


export const reducers = combineReducers({
    trailers,
    User
})

