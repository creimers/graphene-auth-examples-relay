import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { withRouter } from 'react-router'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {drawerOpen: false}
  }

  toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen})

	navigate = (path) => {
		this.toggleDrawer()
		this.props.router.push(path)
	}

  render() {
    return (
      <div>
        <AppBar title="AUTH" onLeftIconButtonTouchTap={() => this.toggleDrawer()} />
        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
        >
          <MenuItem onTouchTap={() => this.navigate('/')} >Home</MenuItem>
          <MenuItem onTouchTap={() => this.navigate('/register')} >Register</MenuItem>
          <MenuItem onTouchTap={() => this.navigate('/login')} >Login</MenuItem>
          <MenuItem onTouchTap={() => this.navigate('/profile')} >Profile</MenuItem>
        </Drawer>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#onenternextstate-replace-callback

export default withRouter(App)
