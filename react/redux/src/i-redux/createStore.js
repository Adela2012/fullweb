export default function createStore (reducer) {
    let currentState
    let currentListeners = []
    function getState() {
        return currentState
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(listener => listener())
        return action
    }

    function subscribe(listener) {
        currentListeners.push(listener)
        return () => {
            let index = currentListeners.findIndex(listener)
            currentListeners.splice(index, 1)
        }
    }


    dispatch({type: "REDUX/OOOO"})

    return {
        getState,
        subscribe,
        dispatch
    }
}