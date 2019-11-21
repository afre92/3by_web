import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addFlashMessage } from '../actions/flashMessages'
import { logout } from '../actions/authActions'

export default function(ComposedComponent) {
  class Authenticate extends Component {

    componentWillMount(){
      if (!this.props.auth.isAuthenticated || (this.props.auth.user.exp < new Date().getTime() / 1000) ) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'you need to login to access this page'
        });
        this.props.logout();
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth.isAuthenticated) {
        this.props.history.push('/')
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  Authenticate.propTypes = {
    addFlashMessage: PropTypes.func.isRequired
  }

  function mapStateToProps( state ) {
    return {
      auth: state.auth
    }
  }
  return connect(mapStateToProps, { addFlashMessage, logout })(Authenticate);
}