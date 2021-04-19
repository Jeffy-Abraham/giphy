import {combineReducers} from 'redux'
import CategoryReducer from './gifsCategory/category-reducer'
import UserReducer from './users/user-reducer'
import{persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CategoryTypesReducer from './gifsTypes/gifsTypes-reducer'
const persistConfig={
    key:'root',
    storage,
    whitelist:['user'],
    
}

const reducer=combineReducers({
    category:CategoryReducer,
    categoryTypes:CategoryTypesReducer,
    user:UserReducer
})
export default   persistReducer(persistConfig,reducer)  