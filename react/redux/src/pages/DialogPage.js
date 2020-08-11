import React, { Component } from 'react'
import Dialog from '../components/Dialog'
export default class DialogPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isShow: false
        }
    }
    render() {
        const isShow = this.state.isShow
        return (
            <div>
                <button onClick={() =>{
                    this.setState({
                        isShow: !isShow
                    })
                }}>button</button>
                {isShow && <Dialog />}
            </div>
        )
    }
}
