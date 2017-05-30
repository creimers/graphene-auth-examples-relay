import Relay from 'react-relay'

class LoginUser extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation{login}`
  }

  getVariables() {
    return {
      email: this.props.email,
      password: this.props.password
    }
  }

  getFatQuery() {
    return Relay.QL`
      fragment on LoginPayload {
        token
        errors
      }
    `
  }

  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      // Forces these fragments to be included in the query
      children: [Relay.QL`
        fragment on LoginPayload {
          token
          errors
        }
      `],
    }];
  }

  // static fragments = {
    // viewer: () => Relay.QL`
    // fragment on Viewer {
      // user {
        // id
      // }
    // }
    // `,
  // }
}

export default LoginUser
