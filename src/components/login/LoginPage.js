import React, { Component } from 'react'
import LoginForm from './LoginForm'

export default class LoginPage extends Component {
  render() {
    return (
      <div className="">
        <div className="center-horizontally page-header">
          <div className="col-md-4 col-md-offset-4 modal-black pt-10">
            <div className="modal-content">
              <div className="modal-body ">
              <LoginForm history={this.props.history} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
