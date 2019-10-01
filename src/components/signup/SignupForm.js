import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import PropTypes from 'prop-types';


export default class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  checkUserExists(e){
    const field = e.target.name;
    const val = e.target.value;
    if (val.length >= 3) {
      this.props.userExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false
        }
        this.setState({ errors, invalid })
      })
    }

  }

  onSubmit(e){
    this.setState({ errors: {}, isLoading: true});
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'you signed up successfully. Welcome!'

        });
        this.props.history.push('/');
      },
      ({ data }) => this.setState({ erros: data, isLoading: false})
    )
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="card card-register content">
        <div className="card-header">
          <img className="card-img" src="../assets/img/square1.png" alt="Card image" />
          <h4 className="card-title">Register</h4>
        </div>
        <div className="card-body">

          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              error={errors.username}
              placeholder="Username"
              icon="icon-single-02"
              checkUserExists={this.checkUserExists}
              onChange={this.onChange}
              value={this.state.username}
              field="username"
            />

            <TextFieldGroup
              error={errors.email}
              placeholder="Email"
              icon="icon-email-85"
              checkUserExists={this.checkUserExists}
              onChange={this.onChange}
              value={this.state.email}
              field="email"
            />

            <TextFieldGroup
              error={errors.password}
              placeholder="Password"
              icon="icon-lock-circle"
              onChange={this.onChange}
              value={this.state.password}
              field="password"
              type="password"
            />

            <TextFieldGroup
              error={errors.password_confirmation}
              placeholder="Password confirmation"
              icon="icon-lock-circle"
              onChange={this.onChange}
              value={this.state.password_confirmation}
              field="password_confirmation"
              type="password"
            />
          </form>
        </div>
        <div className="card-footer">
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-info btn-round btn-lg">
                  Sign Up
          </button>
        </div>
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  userExists: PropTypes.func.isRequired
}