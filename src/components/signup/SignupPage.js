import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages'
import { connect } from 'react-redux'

class SignupPage extends Component {
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div className="" >
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} history={this.props.history} addFlashMessage={addFlashMessage} />
        </div>
      </div>
    )
  }
}

export default connect((state) => { return {} }, {userSignupRequest, addFlashMessage })(SignupPage);