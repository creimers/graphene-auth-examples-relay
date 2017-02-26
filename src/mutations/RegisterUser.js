import Relay from 'react-relay'

class RegisterUser extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation{register}`
  }

  getVariables() {
    return {
      email: this.props.email,
      password: this.props.password,
      passwordRepeat: this.props.password_repeat
    }
  }

  getFatQuery() {
    return Relay.QL`
      fragment on RegisterPayload {
        success
        errors
      }
    `
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {}
    }]
  }
}

export default RegisterUser
