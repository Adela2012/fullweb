import React, { Component } from 'react'
import { themeContext, userContext } from './Context'

export default class ConsumerPage extends Component {

    render() {
        console.log('ConsumerPage')
        return (
            <div>
                <themeContext.Consumer>{
                    e => <div>
                        {JSON.stringify(e)}
                        <userContext.Consumer>
                            {u => JSON.stringify(u)}
                        </userContext.Consumer>
                    </div>
                }</themeContext.Consumer>
            </div>
        )
    }
}
