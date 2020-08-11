
// import {createStore} from '../i-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const countReducer = (state = 0, {type, payload = 1}) => {
    switch (type) {
        case 'ADD':
            return state + payload
    
        case 'MINUS':
            return state - payload

        default:
            return state
    }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger))

export default store