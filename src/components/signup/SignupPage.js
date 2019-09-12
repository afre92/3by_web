import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { userSignupRequest } from '../../actions/signupActions';
import { connect } from 'react-redux'

class SignupPage extends Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="" >
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default connect((state) => { return {} }, {userSignupRequest })(SignupPage);