import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios'

export default class ProfileForm extends Component {

  constructor(props){
    super(props)
    
    const { user } = this.props

    this.state = {
      new_username: user.username,
      username: user.username,
      email: user.email,
      new_password: '',
      current_password: '',
      errors: {},
      isLoading: true,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
    this.onBlurPassword = this.onBlurPassword.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onBlurPassword(e){
    if(e.target.value.length > 5 ) {
      const errors = { ...this.state.errors }
      delete errors[e.target.name]
      const isLoading  = isEmpty(errors) ? false : true
      this.setState({isLoading, errors})
    } else {
      this.setState({isLoading: true , errors: { ...this.state.errors ,[e.target.name]: "Password must be at least 6 characters long"}})
    }
  }

  checkUserExists(e){

    const field = e.target.name;
    const val = e.target.value;
    let errors = this.state.errors;
    let invalid;

    if(val.length <= 3){
      errors[field] = "Username must be at least 4 characters long";
      invalid = true;
      this.setState({ errors, invalid })
    } else{
        axios.get(`${process.env.REACT_APP_API_URL}/check_user/${val}`)
        .then(res => {
          if (res.data && this.props.user.username !== val) {
            errors[field] = 'There is user with such ' + field;
            invalid = true;
          } else {
            delete errors[field];
            invalid = false
          }
          this.setState({ errors, invalid })
        }) 
    }
 }

  onSubmit(e){
    this.setState({ errors: {}, isLoading: true});
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.username}`, this.state)
    .then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'you have successfully updated your profile'

        })
      this.props.logout();
      },
      ({ data }) => this.setState({ erros: data, isLoading: false})
    )
  }

  render() {
    const { errors } = this.state
    return (
      
      <div>
        <div className="card card-plain t-100">
          <div className="card-header">
            <h1 className="text-left">User Profile
              <hr className="line-primary"></hr>
            </h1>
            
          </div>
          <div className="card-body"> 
            <form onSubmit={this.onSubmit} autoComplete="off">
              <div className="py-2">
                <TextFieldGroup
                  onChange={this.onChange}
                  placeholder=""
                  icon="icon-email-85"
                  value={this.state.email}
                  field="email"
                  disabled={true}
                />
              </div>
              <div className="py-2">
                <TextFieldGroup
                  error={errors.new_username}
                  placeholder="Username"
                  icon="icon-single-02"
                  onBlur={this.checkUserExists}
                  onChange={this.onChange}
                  value={this.state.new_username}
                  field="new_username"
                />
              </div>
              <div className="py-2">
                <TextFieldGroup
                  error={errors.new_password}
                  placeholder="New Password"
                  icon="icon-lock-circle"
                  onChange={this.onChange}
                  onBlur={this.onBlurPassword}
                  value={this.state.new_password}
                  field="new_password"
                  type="password"
                />
              </div>
              <div className="pb-2">
                <div className="text-primary mb-3">* Password required for all changes</div>
                <TextFieldGroup
                  error={errors.current_password}
                  placeholder="Current Password"
                  icon="icon-lock-circle"
                  onChange={this.onChange}
                  onBlur={this.onBlurPassword}
                  value={this.state.current_password}
                  field="current_password"
                  type="password"
                  required={true}
                />
              </div>
              <div className="pt-2">
               <button type="submit" className="btn btn-primary btn-round float-left" rel="tooltip" data-placement="right" disabled={this.state.isLoading} >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
