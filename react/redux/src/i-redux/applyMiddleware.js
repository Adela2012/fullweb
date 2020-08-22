// import { createLogger } from "redux-logger"

export default (...middlewares) => (createStore) => (reducer) => {
    const store = createStore(reducer)
    let dispatch = store.dispatch

    const midApi = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
    }

    const md2 = middlewares.map(middleware => middleware(midApi))

    dispatch = compose(...md2)(dispatch)

    return {
        ...store,
        dispatch
    }
}

function compose(...fns) {
        if (fns.length === 0) {
            return arg => arg
        }
        if (fns.length === 1) {
            return fns[0]
        }
        return fns.reduce((a, b) => (...arg) => a(b(...arg)))
}
