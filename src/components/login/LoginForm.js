import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { deleteFlashMessage, addFlashMessage } from '../../actions/flashMessages'

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this)

    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  onChangeCheckBox(e){
    this.setState({
      [e.target.name]: !this.state.rememberMe
    })
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true});
    this.props.login(this.state).then(
      (res) => { 
        this.props.addFlashMessage({
          type: 'success',
          text: 'you logged in successfully. Welcome!'
        });
        return this.props.history.push('/dashboard')
      },
      (err) => this.setState({ errors: err['response']['data'], isLoading: false})
    )
  }
  render() {

    const { email, password, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="text-muted text-center ml-auto mr-auto">
          <h3 className="mb-0">Sign in with</h3>
        </div>
        <br />
        <div className="auth-icons">
          <div className="btn-wrapper text-center">
            <a href="/somewhere" className="btn btn-neutral btn-icon">
              <img src="assets/img/github.svg" alt="github-logo"/>
            </a>
            <a href="/somewhere" className="btn btn-neutral btn-icon">
              <img src="assets/img/google.svg"  alt="google-logo"/>
            </a>
          </div>
        </div>

        <div className="text-center text-muted mb-4 mt-3">
          <small>Or sign in with credentials</small>
        </div>

        { errors.error && <div className="alert alert-danger">{errors.error}</div> }
      
        <TextFieldGroup
          field="email"
          placeholder="Email"
          icon="icon-email-85"
          value={email}
          error={errors.email}
          onChange={this.onChange}
        />   
        <TextFieldGroup
          field="password"
          placeholder="Password"
          icon="icon-key-25"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />
        
        <div className="form-check mt-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="rememberMe" onChange={this.onChangeCheckBox} checked={this.state.rememberMe}/>
            <span className="form-check-sign"></span>
            Remember me!
          </label>
        </div>
        <br />
        <div className="form-group">
          <div className="text-center">
            <button className="btn btn-primary btn-lg" disabled={isLoading}>
              Sign in
            </button>
          </div>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
      messages: state.flashMessages,
      auth: state.auth
  }
}

export default connect(mapStateToProps, { login, deleteFlashMessage, addFlashMessage })(LoginForm)