import React, { Component } from 'react'
import ProfileForm from './ProfileForm'
import UserStats from './UserStats'

export default class ProfilePage extends Component {
  render() {
    return (
      <div class="profile-page">
        <div class="wrapper mb-5 container">
          <div class="page-header">
            <img src="/assets/img/dots.png" class="dots" />
            <img src="/assets/img/path4.png" class="path" />
            <div class="pt-200 align-items-center">
              <div class="row">
                <div class="col-md-6">
                  <ProfileForm />
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
