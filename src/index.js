import React from 'react'
import Relay from 'react-relay'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router'
import useRelay from 'react-router-relay'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';
import Home from './components/Home'
import Register from './views/register'
import './index.css';

injectTapEventPlugin()

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8000/graphql')
)

const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` }

ReactDOM.render(
  <MuiThemeProvider>
    <Router
      forceFetch
      environment={Relay.Store}
      render={applyRouterMiddleware(useRelay)}
      history={browserHistory}
    >
      <Route path="/" component={App} queryies={ViewerQueries} >
        <IndexRoute component={Home} />
				<Route path="register" component={Register} />
      </Route>
    </Router>
  </MuiThemeProvider>
  , document.getElementById('root')
);
