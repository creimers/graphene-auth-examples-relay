import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Snackbar from 'material-ui/Snackbar'
import { withRouter } from 'react-router'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      snackbarOpen: false
    }
  }

  toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen})

	navigate = (path) => {
		this.toggleDrawer()
		this.props.router.push(path)
	}

  logout = () => {
    console.log('logout')
    localStorage.removeItem('token')
    this.setState({snackbarOpen: true})
		this.toggleDrawer()
    this.props.router.push('/')
    setTimeout(() => this.setState({snackbarOpen: false}), 2001)
    
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
          <MenuItem onTouchTap={() => this.navigate('/login')} >Login</MenuItem>
          <MenuItem onTouchTap={() => this.logout()} >Logout</MenuItem>
          <MenuItem onTouchTap={() => this.navigate('/')} >Home</MenuItem>
          <MenuItem onTouchTap={() => this.navigate('/register')} >Register</MenuItem>
          <MenuItem onTouchTap={() => this.navigate('/profile')} >Profile</MenuItem>
        </Drawer>
        <main>
          {this.props.children}
        </main>
        <Snackbar
          open={this.state.snackbarOpen}
          message="logged out!"
          autoHideDuration={2000}
        />
      </div>
    )
  }
}

// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#onenternextstate-replace-callback

export default withRouter(App)
