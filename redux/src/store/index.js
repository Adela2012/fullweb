import { createStore, applyMiddleware, combineReducers } from "../redux";

// import {createStore, applyMiddleware, combineReducers} from "redux";
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

const countReducer = (state = 0, { type, payload = 1 }) => {

    switch (type) {
        case 'ADD':
            return state + payload

        case 'MINUS':
            return state - payload

        default:
            return state;
    }
}


function thunk({ dispatch, getState }) {
    return next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        }
        return next(action)
    }
}

function logger({ dispatch, getState }) {
    // prev state 0
    // redux-logger.js:1  action     {type: "ADD"}
    // redux-logger.js:1  next state 1
    return next => action => {
        const preState = getState()
        console.log('prev state', preState)

        console.log('====== action', JSON.stringify(action))
        const returnValue = next(action)

        const nextState = getState()
        console.log('nextv state', nextState)

        return returnValue
    }
}





const store = createStore(
    combineReducers({ home: countReducer }),
    applyMiddleware(thunk, logger)
)
export default store