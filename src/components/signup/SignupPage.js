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
      <div>
      <div className="center-horizontally">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} history={this.props.history} addFlashMessage={addFlashMessage} userExists={userExists} />
        </div>
      </div>
      <div class="register-bg"></div>
          <div id="square1" className="square square-1"></div>
          <div id="square2" className="square square-2"></div>
          <div id="square3" className="square square-3"></div>
          <div id="square4" className="square square-4"></div>
          <div id="square5" className="square square-5"></div>
          <div id="square6" className="square square-6"></div>
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