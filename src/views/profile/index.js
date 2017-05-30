import React, { Component } from 'react'
import Relay from 'react-relay'


class Profile extends Component {

  render() {
    let { viewer } = this.props
    return (
      <div>
        <h1>Your profile</h1>
        <p>your email... {viewer.user.email}</p>
      </div>
    )
  }
}

export default Relay.createContainer(
  Profile,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            email
          }
        }
      `,
    },
  },
)
