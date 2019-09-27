import React, { Component } from 'react'
import SignupForm from './SignupForm'
import PropTypes from 'prop-types'
import { userSignupRequest, userExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages'
import { connect } from 'react-redux'

class SignupPage extends Component {
  render() {
    const { userSignupRequest, addFlashMessage, userExists } = this.props;
    return (
      <div className="index-page" >
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} history={this.props.history} addFlashMessage={addFlashMessage} userExists={userExists} />
        </div>
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  userExists: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, {userSignupRequest, addFlashMessage, userExists })(SignupPage);