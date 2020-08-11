import React, { Component } from 'react'
import {createPortal} from 'react-dom'
export default class Dialog extends Component {
    constructor(props) {
        super(props)
       console.log(3)
    }

    componentWillMount() {
        const doc = window.document
        this.node = doc.createElement('div')
        doc.body.appendChild(this.node)
        console.log(22, this.node)
    }


    componentWillUnmount() {
        if (this.node) {
            window.document.body.removeChild(this.node)
        }
    }
    render() {
        
        return createPortal(
            <div>11s</div>,
            this.node
        )
    }
}
