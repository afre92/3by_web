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
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <TextFieldGroup
          error={errors.username}
          label="username"
          checkUserExists={this.checkUserExists}
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="email"
          checkUserExists={this.checkUserExists}
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.password_confirmation}
          label="password_confirmation"
          onChange={this.onChange}
          value={this.state.password_confirmation}
          field="password_confirmation"
          type="password"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            sign up
          </button>
        </div>

      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  userExists: PropTypes.func.isRequired
}