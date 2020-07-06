import React, { Component } from 'react'
import { connect } from 'react-redux'

export default connect(
    ({user}) => ({user})
)( class UserPage extends Component {
    render() {
        const {user} = this.props
        const {userInfo} = user
        console.log(user)
        return (
            <div>
                UserPage
                <div>id: {userInfo.id}</div>
                <div>name: {userInfo.name}</div>
                <div>score: {userInfo.score}</div>
            </div>
        )
    }
})
