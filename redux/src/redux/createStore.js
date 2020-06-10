export default function createStore (reducer, enhancer) {
    if (enhancer) return enhancer(createStore)(reducer)

    let currentState 
    let currentListener = []

    function getState() {
        return currentState
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListener.forEach(listener => listener())
        return action
    }

    function subscribe(listener) {
        currentListener.push(listener)
        return () => {
            let index = currentListener.findIndex(listener)
            currentListener.splice(index, 1)
        }
    }
    
    dispatch({type: "REDUX/OOOO"})

    return {
        getState,
        dispatch,
        subscribe,

    }
}