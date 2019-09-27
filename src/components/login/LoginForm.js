import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


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
      (res) => this.props.history.push('/'),
      (err) => this.setState({ errors: err['response']['data'], isLoading: false})
    )
  }
  render() {

    const { email, password, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
          <div class="text-muted text-center ml-auto mr-auto">
            <h3 class="mb-0">Sign in with</h3>
          </div>

          <div className="auth-icons">
            <div class="btn-wrapper text-center">
              <a href="#" class="btn btn-neutral btn-icon">
                <img src="assets/img/github.svg" />
              </a>
              <a href="#" class="btn btn-neutral btn-icon">
                <img src="assets/img/google.svg" />
              </a>
            </div>
          </div>

          <div class="text-center text-muted mb-4 mt-3">
            <small>Or sign in with credentials</small>
          </div>

        { errors.error && <div className="alert alert-danger">{errors.error}</div> }

        <TextFieldGroup
          field="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>
            Login
          </button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}


export default connect(null, { login })(LoginForm)