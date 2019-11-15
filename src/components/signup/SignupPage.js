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
      <div className="su register-page">
        <div id="square7" className="square square-7"></div>
        <div id="square8" className="square square-8"></div>
        <div className="col-md-4 col-md-offset-4 offset-md-1 register-content">
          <SignupForm userSignupRequest={userSignupRequest} history={this.props.history} addFlashMessage={addFlashMessage} userExists={userExists} />
        </div>
        <div className="register-bg"></div>
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