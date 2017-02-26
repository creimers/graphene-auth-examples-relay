import React, { Component } from 'react'
import RegisterForm from '../../components/RegisterForm'
import Relay from 'react-relay'
import RegsiterUser from '../../mutations/RegisterUser'

class Register extends Component {
  onSave(user) {
    console.log("let's register")
    console.log(user)
    Relay.Store.commitUpdate(
      new RegsiterUser(user), 

      {
        onSuccess: () => console.log('success!'),
        onFailure: (transaction) => console.log(transaction)
      }
    )
  }

  render() {
    return (
      <RegisterForm onSave={this.onSave.bind(this)} />
    )
  }
}

export default Register
