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
      <div class="profile-page">
        <div class="wrapper mb-5 container">
          <div class="page-header">
            <img src="/assets/img/dots.png" class="dots" />
            <img src="/assets/img/path4.png" class="path" />
            <div class="pt-200 align-items-center">
              <div class="row">
                <div class="col-md-6">
                  <ProfileForm addFlashMessage={addFlashMessage} logout={logout}/>
                </div>
                <div class="col-lg-4 col-md-6 ml-auto mr-auto">
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