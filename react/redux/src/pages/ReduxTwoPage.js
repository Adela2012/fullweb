
import React, { Component } from 'react'
import store from '../store/indexTwo'
console.log(store)
export default class ReduxTwoPage extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate()
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    add = () => {
        store.dispatch({
            type: 'ADD'
        })

       
    }
    minus = () => {
        store.dispatch({
            type: 'MINUS'
        })
    }
    asyncAdd = () => {
        store.dispatch((dispatch, getState) => {
            setTimeout(() => {
                dispatch({
                    type: 'ADD'
                })
            }, 1);
        })
    }
    promiseAdd = () => {
        store.dispatch(Promise.resolve({type: "ADD"}))
    }
    render() {
        return (
            <div>
                {store.getState().home}

                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyncAdd}>asyncAdd</button>
                <button onClick={this.promiseAdd}>promiseAdd</button>
            </div>
        )
    }
}
