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
      <ul className="navbar-nav">
        <li className="nav-item p-0">
          <Link to="/" className="nav-link">
            <i className="fab fa-twitter"></i>
            <p className="d-lg-none d-xl-none">Twitter</p>
          </Link>
        </li>
        <li className="nav-item p-0">
          <Link to="/" className="nav-link">
            <i className="fab fa-facebook-square"></i>
            <p className="d-lg-none d-xl-none">Facebook</p>
          </Link>
        </li>
        <li className="nav-item p-0">
          <Link to="/" className="nav-link">
            <i className="fab fa-instagram"></i>
            <p className="d-lg-none d-xl-none">Instagram</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>

        <li className="nav-item">
          <a href="#logout" onClick={this.logout.bind(this)} className="nav-link">Logout</a>
        </li>
      </ul>
    )

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup"> Sign up</Link></li>
        <li><Link to="/login"> Login</Link></li>
        <li><Link to="/"> Home</Link></li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <span>3BY•</span>  Video Concierge
            </Link>
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