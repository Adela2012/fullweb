import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import UserPage from '../pages/UserPage'
import _404Page from '../pages/_404Page'
import PrivateRoute from './PrivateRoute'


export const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage
    },
    {
        path: '/user',
        exact: true,
        component: UserPage
    },
    {
        component: _404Page
    },
]

export default function Routes(props) {
    return (
        <Router>
            <Link to="/">首页</Link>
            <Link to="/user">用户中心</Link>
            <Link to="/login">登录</Link>

            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/user" component={UserPage} /> */}
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/user" component={UserPage} />
                <Route component={_404Page} />
            </Switch>

            {/* 

                {
                    routes.map(Route_ =>
                        Route._auth
                            ? <Route._auth key={Route._path + 'route'} {...Route_} />
                            : <Route key={Route._path + 'route'} {...Route_} />
                    )
                }
            */}

        </Router>
    )
}