import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Relay from 'react-relay'

import LoginForm from '../../components/LoginForm'
import LoginUser from '../../mutations/LoginUser'

class Login extends Component {

  handleLogin(user) {
    Relay.Store.commitUpdate(
      new LoginUser(user),
      {
        onSuccess: (resp) => {
          localStorage.setItem('token', resp.login.token)
          let errors = resp.login.errors
          if (!errors) {
            // redirect to profile
            this.props.router.push('/profile')
          }
        },
        onFailure: (transaction) => console.log(transaction)
      }
    )
  }

  render() {
    return (
      <div>
        <LoginForm onLogin={this.handleLogin.bind(this)} />
      </div>
    )
  }
}

export default withRouter(Login)
