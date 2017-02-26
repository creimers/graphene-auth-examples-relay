import React, { Component } from 'react'
import RegisterForm from '../../components/RegisterForm'

class Register extends Component {
  onSave(user) {
    console.log("let's register")
    console.log(user)
  }

  render() {
    return (
      <RegisterForm onSave={this.onSave.bind(this)} />
    )
  }
}

export default Register
