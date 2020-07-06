import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {login} from '../action/login'

const mapStateToProps = ({user}) => ({
    isLogin: user.isLogin,
    loading: user.loading,
    err: user.err
})

const mapDispatchToProps = {
    login
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        const { isLogin, loading, err = {}, location, login } = this.props
        const { redirect = '/' } = location.state || {}
        const { name } = this.state
        console.log('isLogin', isLogin)
        if (isLogin) {
            return <Redirect to={redirect} />
        }
        return (
            <div>
                LoginPage
                <input value={name} onChange={this.nameChange} />
                <button onClick={() => {
                    console.log('name', name)
                    login({name})
                }}>{loading ? 'loading' : 'click login'}</button>
                <p className="red">{err.msg}</p>
            </div>
        )
    }
})