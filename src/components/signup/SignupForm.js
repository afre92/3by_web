import React, { Component } from 'react'


export default class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>
        <div className="form-group">
          <label className="control-label">username</label>
          <input
            onChange={this.onChange} 
            type="text"
            name="username"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">email</label>
          <input
            onChange={this.onChange} 
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">password</label>
          <input
            onChange={this.onChange} 
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">password confirmation</label>
          <input
            onChange={this.onChange} 
            type="password"
            name="password_confirmation"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            sign up
          </button>
        </div>

      </form>
    )
  }
}

// bc this is a function passed to the component
// SignupForm.propTypes = {
//   userSignupRequest: React.PropTypes.func.isRequired
// }