import { loginReducer } from './loginReducer'
import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
// import thunk from 'redux-thunk'
import createSagaMiddleware from '../../node_modules/redux-saga'
const sagaMiddleware =  createSagaMiddleware()
const store = createStore(
    combineReducers({ user: loginReducer }),
    // applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run()
export default store