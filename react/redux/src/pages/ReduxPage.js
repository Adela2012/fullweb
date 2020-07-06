import React, { Component } from 'react'
import store from '../store'
console.log(store)
export default class ReduxPage extends Component {
    componentWillMount() {
        this.unsubscirbe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscirbe()
    }
    minus() {
        store.dispatch({ type: 'MINUS' })
    }
    add() {
        store.dispatch({ type: 'ADD' })
    }
    asyncAdd() {
        store.dispatch((dispatch, getState) => {
            setTimeout(() => {
                dispatch({ type: "ADD" })
            }, 1000)
        })
    }
    promiseMinus() {
        store.dispatch(
            Promise.resolve({
                type: "MINUS"
            })
        );
    }
    render() {
        return (
            <div>
                <p>{store.getState().home}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyncAdd}>asyncAdd</button>
                <button onClick={this.promiseMinus}>promiseMinus</button>
            </div>
        )
    }
}
