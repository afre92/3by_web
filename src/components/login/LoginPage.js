import React, { Component } from 'react'
import LoginForm from './LoginForm'

export default class LoginPage extends Component {
  render() {
    return (
      <div className="center-horizontally">
        <div className="col-md-4 col-md-offset-4 modal-black section">
          <div className="modal-content">
            <div className="modal-body ">
            <LoginForm history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
