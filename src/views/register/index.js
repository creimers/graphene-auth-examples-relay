import React, { Component } from 'react'
import Relay from 'react-relay'
import Snackbar from 'material-ui/Snackbar'

import RegisterForm from '../../components/RegisterForm'
import RegsiterUser from '../../mutations/RegisterUser'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {snackbarOpen: false}
  }

  onSave(user) {
    Relay.Store.commitUpdate(
      new RegsiterUser(user), 

      {
        onSuccess: () => {
          this.setState({snackbarOpen: true})
        },
        onFailure: (transaction) => console.log(transaction)
      }
    )
  }

  render() {
    return (
      <div>
        <RegisterForm onSave={this.onSave.bind(this)} />
        <Snackbar
          open={this.state.snackbarOpen}
          message="Registration successfull!"
          autoHideDuration={4000}
        />
      </div>
    )
  }
}

export default Register
