import React, { Component } from 'react'
import ProfileForm from './ProfileForm'
import UserStats from './UserStats'
import { addFlashMessage } from '../../actions/flashMessages'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

class ProfilePage extends Component {
  render() {

    const {addFlashMessage, logout } = this.props;
    return (
      <div className="profile-page">
        <div className="wrapper mb-5 container">
          <div className="page-header">
            <img src="/assets/img/dots.png" className="dots" />
            <img src="/assets/img/path4.png" className="path" />
            <div className="pt-200 align-items-center">
              <div className="row">
                <div className="col-md-6">
                  <ProfileForm addFlashMessage={addFlashMessage} logout={logout}/>
                </div>
                <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                  <UserStats />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => { return {} }, {addFlashMessage, logout})(ProfilePage);