import Relay from 'react-relay'

class ActivateUser extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation{activate}`
  }

  getVariables() {
    return {
      token: this.props.token,
      uid: this.props.uid
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

export default ActivateUser
