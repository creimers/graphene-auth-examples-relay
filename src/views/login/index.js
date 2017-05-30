import React, { Component } from 'react'
import Relay from 'react-relay'

import LoginForm from '../../components/LoginForm'
import LoginUser from '../../mutations/LoginUser'

class Login extends Component {

  handleLogin(user) {
    console.log('user: ', user)
    Relay.Store.commitUpdate(
      new LoginUser(user),
      {
        onSuccess: (resp) => {
          console.log('login success: ', resp)
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

export default Login
