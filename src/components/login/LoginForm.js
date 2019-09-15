import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

export default class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      identifier: '',
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

  }
  render() {

    const { identifier, password, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Login </h1>

        <TextFieldGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
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
