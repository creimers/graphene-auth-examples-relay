import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Relay from 'react-relay'
import Snackbar from 'material-ui/Snackbar'

import ActivateUser from '../../mutations/ActivateUser'

class Activate extends Component {

  constructor(props) {
    super(props)
    this.state = {snackbarOpen: false}
  }

  componentDidMount() {
    console.log(this.props.location.query)
    Relay.Store.commitUpdate(
      new ActivateUser(this.props.location.query),
      {
        onSuccess: () => {
          this.setState({snackbarOpen: true})
          setTimeout(() => {
            this.props.router.push('/login')
          }, 3000)
        },
        onFailure: (transaction) => console.log(transaction)
      }
    )
  }

  render() {
    return (
      <div>
        <p>Activating your account...</p>
        <Snackbar
          open={this.state.snackbarOpen}
          message="Your account is active!"
          autoHideDuration={2500}
        />
        </div>
    )
  }
}

export default withRouter(Activate)
