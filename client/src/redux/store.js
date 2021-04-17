import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import logger from 'redux-logger'
import persistStore from 'redux-persist/es/persistStore'

const middlewares=[thunk,logger]

const store=createStore(reducer,applyMiddleware(...middlewares))
const persistor=persistStore(store)
export {store,persistor}
