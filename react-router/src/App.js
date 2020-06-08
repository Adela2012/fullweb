import React from 'react';
import './App.css';
// import RouteChildren from './pages/RouteChildren';
// import RouteRender from './pages/RouteRender';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <RouteChildren /> */}
      {/* <RouteRender /> */}

      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">搜索</Link>


        {/* <Switch> */}
          <Route path="/" exact
            // children={() => <div>children</div>}
            // component={HomePage}
            render={() => <div>Render</div>}
          />
          {/* <Route exact path="/" component={HomePage}></Route> */}
          <Route path="/user" component={UserPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route component={_404Page}></Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

function HomePage() {
  return (<div>HomePage</div>)
}

function UserPage() {
  return (<div>UserPage</div>)
}

function LoginPage() {
  return (<div>LoginPage</div>)
}

function ProductPage(e) {
  console.log(e)
  const { url, params: { id } } = e.match
  return (
    <div>
      <div>ProductPage{id}</div>
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail'} component={DetailPage}></Route>
    </div>
  )
}

function DetailPage(params) {
  console.log(222, params);
  return (<div>DetailPage</div>)
}

function _404Page(params) {
  return (<div>_404Page</div>)
}

export default App;
