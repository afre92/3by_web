import React, { Component } from 'react'
import classnames from 'classnames'


export default class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
      isLoading: false
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
    this.setState({ errors: {}, isLoading: true});
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ erros: data, isLoading: false})
    )
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>
        <div className={classnames('form-group', { 'has-error': errors.username })}>
          <label className="control-label">username</label>
          <input
            onChange={this.onChange} 
            type="text"
            name="username"
            className="form-control"
          />
          {errors.username && <span className='help-block'>{errors.username}</span>}
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
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
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