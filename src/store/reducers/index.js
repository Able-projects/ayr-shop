import {combineReducers} from 'redux'
import authReducer from './authReducer'
import productReducer from './productReducer'
import errorReducer from './errorReducer'

export default combineReducers({
    productReducer: productReducer,
    authReducer: authReducer,
    errorReducer
})