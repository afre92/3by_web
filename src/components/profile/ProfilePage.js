import React, { Component } from 'react'
import ProfileForm from './ProfileForm'
import UserStats from './UserStats'
import { addFlashMessage } from '../../actions/flashMessages'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

class ProfilePage extends Component {
  render() {
    const {addFlashMessage, logout, auth } = this.props;
    return (
      <div>
        <div className="wrapper pb-5 container">
          <div className="page-header">
            <img src="/assets/img/dots.png" className="dots" alt="background-shapes"/>
            <img src="/assets/img/path4.png" className="path" alt="background-shapes" />
            <div className="pt-100 align-items-center">
              <div className="row">
                <div className="col-md-6">
                  <ProfileForm addFlashMessage={addFlashMessage} logout={logout} user={auth.user}/>
                </div>
                <div className="col-lg-6 col-md-6 align-self-center">
                  <UserStats user={auth.user} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {addFlashMessage, logout})(ProfilePage);