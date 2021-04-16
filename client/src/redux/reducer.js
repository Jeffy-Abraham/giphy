import {combineReducers} from 'redux'
import CategoryReducer from './gifsCategory/category-reducer'

const reducer=combineReducers({
    category:CategoryReducer
})
export default reducer