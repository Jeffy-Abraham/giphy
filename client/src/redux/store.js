import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import logger from 'redux-logger'

const middlewares=[thunk,logger]

const store=createStore(reducer,applyMiddleware(...middlewares))

export default store
