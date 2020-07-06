import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function ListItemLink({ name, to, ...rest }) {
    return <Route
        path={to}
        children={({ match }) => (<li className={match ? "active" : ""}>
            <Link to={to} {...rest}>
                {name}
            </Link>
        </li>)}
    />
}

export default class RouteChildren extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <ListItemLink to="/index" name="首页" />
                        <ListItemLink to="/home" name="首页2" />
                    </ul>
                </Router>
            </div>
        )
    }
}
