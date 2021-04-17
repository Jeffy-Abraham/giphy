import {combineReducers} from 'redux'
import CategoryReducer from './gifsCategory/category-reducer'
import UserReducer from './users/user-reducer'

const reducer=combineReducers({
    category:CategoryReducer,
    user:UserReducer
})
export default reducer