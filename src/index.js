import React from 'react'
import Relay from 'react-relay'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router'
import useRelay from 'react-router-relay'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { authMiddleware, RelayNetworkLayer, urlMiddleware } from 'react-relay-network-layer'
import jwt_decode from 'jwt-decode'

import App from './components/App';
import Home from './components/Home'
import Activate from './views/Activate'
import Register from './views/register'
import Login from './views/login'
import Profile from './views/profile'
import './index.css';

injectTapEventPlugin()


// https://github.com/nodkz/react-relay-network-layer
Relay.injectNetworkLayer(
  new RelayNetworkLayer([
    urlMiddleware({
      url: (req) => 'http://localhost:8000/graphql',
    }),
    authMiddleware({
      prefix: 'JWT ',
      token: () => localStorage.getItem('token'),
    })
  ])
)

const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` }

const isAuthenticated = (nextState, replace, callback) => {
  let token = localStorage.getItem('token')
  if (!token) {
    replace('/login')
  }
  else {

    const decoded = jwt_decode(token)
    if (decoded.exp < Date.now() / 1000) {
      replace('/login')
    }
  }
  callback()
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router
      forceFetch
      environment={Relay.Store}
      render={applyRouterMiddleware(useRelay)}
      history={browserHistory}
    >
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
				<Route path="register" component={Register} />
				<Route path="activate" component={Activate} />
				<Route path="login" component={Login} />
				<Route path="profile" component={Profile} queries={ViewerQueries} onEnter={isAuthenticated} />
      </Route>
    </Router>
  </MuiThemeProvider>
  , document.getElementById('root')
);
