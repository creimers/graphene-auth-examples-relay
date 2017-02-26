import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class RegisterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(field, evt) {
    let nextState = {}
    nextState[field] = evt.target.value
    this.setState(nextState)
  }

  handleSubmit() {
    this.props.onSave(this.state)
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            type="email"
            floatingLabelText="E-Mail"
            value={this.state.email}
            onChange={this.handleChange.bind(this, 'email')}
          />
        </div>
        <div>
          <TextField
            type="password"
            floatingLabelText="Password"
            value={this.state.password}
            onChange={this.handleChange.bind(this, 'password')}
          />
        </div>
        <div>
          <RaisedButton
            primary={true}
            label="Register"
            onClick={this.handleSubmit.bind(this)}
          />
        </div>
      </div>
    )
  }   
}

export default RegisterForm
