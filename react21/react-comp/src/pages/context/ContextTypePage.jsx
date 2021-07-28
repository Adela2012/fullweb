import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { themeContext, userContext } from './Context'

export default class contextTypePage extends Component {
    static contextType = themeContext
    
    render() {
        console.log('contextTypePage')
        return (
            <div>
                {JSON.stringify(this.context)}
            </div>
        )
    }
}
