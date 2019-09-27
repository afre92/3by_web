import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions'

class NavigationBar extends Component {
  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
    </ul>
    )

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup"> Sign up</Link></li>
        <li><Link to="/login"> Login</Link></li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand"> 3by </Link>
          </div>

          <div className="navbar-colapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    )
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(NavigationBar)