
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
            store.dispatch(() => {
                setTimeout(() => {
                    store.dispatch({type: 'ADD'})
                }, 0);
            }) 
    }
    render() {
        return (
            <div>
                {store.getState()}

                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyncAdd}>asyncAdd</button>
            </div>
        )
    }
}
