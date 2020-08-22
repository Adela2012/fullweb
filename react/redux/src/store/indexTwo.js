
// import {createStore, applyMiddleware} from '../redux'
import {createStore, applyMiddleware, combineReducers} from '../i-redux'
// import {createStore, applyMiddleware, combineReducers} from 'redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import promise from 'redux-promise'
import isPromise from 'is-promise'


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

const countReducer2 = (state = 0, {type, payload = 1}) => {
    switch (type) {
        case 'ADD':
            return state + payload
    
        case 'MINUS':
            return state - payload

        default:
            return state
    }
}


const store = createStore(combineReducers({home: countReducer, count: countReducer2}), applyMiddleware(thunk, promise, logger))

function logger({getState}) {
    return next => action => {
        console.log('logger')

        console.log('prev',getState(), next, action)

        const returnValue =  next(action)

        const nextVal = getState()

        console.log(returnValue, action.type, nextVal)

        return returnValue
    }
}


function thunk ({dispatch, getState}) {
    return next => action => {
    console.log('thunk')
    if (typeof action === 'function') {
            return action(dispatch, getState)
        }
        return next(action)
    }
} 


function promise ({dispatch, getState}) {
    return next => action => {
        console.log('promise')
        return isPromise(action) ? action.then(dispatch) : next(action)
    }
}



export default store