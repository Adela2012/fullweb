import React, { Component } from 'react'
import {themeContext, userContext} from './Context'
import ConsumerPage from './ConsumerPage'
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage'
export default class Context extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            theme: {
                themeColor: 'red'
            },
            user: {
                userName: 'admin'
            } 
        }
    }

    changeUser = () => {
        this.setState({user: {userName: this.state.user.userName === 'admin' ? 'user' : 'admin'}})
    }
    
    render() {
        return (
            <div>
                <button onClick={this.changeUser}>changeUser</button>
                <themeContext.Provider value={this.state.theme}>
                    <userContext.Provider value={this.state.user}>
                        <UseContextPage />
                        <ContextTypePage />
                        <ConsumerPage />
                    </userContext.Provider>
                </themeContext.Provider>
            </div>
        )
    }
}

