import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import jwt_decode from 'jwt-decode';
import isEmpty from 'lodash/isEmpty';

export default class ProfileForm extends Component {

    constructor(props){
    super(props)

    const token = localStorage.getItem('jwtToken');
    const decodedToken = jwt_decode(token)

    this.state = {
      username: decodedToken.username,
      email: decodedToken.email,
      new_password: '',
      current_password: '',
      errors: {},
      isLoading: true,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
    this.renderProfileForm = this.renderProfileForm.bind(this);
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
    if (val.length >= 3 && this.state.username !== val) {
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
    // this.props.userSignupRequest(this.state).then(
    //   () => {
    //     this.props.addFlashMessage({
    //       type: 'success',
    //       text: 'you signed up successfully. Welcome!'

    //     });
    //     this.props.history.push('/playlists');
    //   },
    //   ({ data }) => this.setState({ erros: data, isLoading: false})
    // )
  }

  renderProfileForm() {
    const { errors } = this.state
    return (
      
      <div>
        <div class="card card-plain">
          <div class="card-header">
            <h1 class="text-left">User Profile
              <hr className="line-primary"></hr>
            </h1>
            
          </div>
          <div class="card-body"> 
            <form onSubmit={this.onSubmit}>
              <div className="py-2">
                <TextFieldGroup
                  // error={errors.email}
                  placeholder=""
                  icon="icon-email-85"
                  value={this.state.email}
                  field="email"
                  disabled={true}
                />
              </div>
              <div className="py-2">
                <TextFieldGroup
                  // error={errors.username}
                  placeholder="Username"
                  icon="icon-single-02"
                  onBlur={this.checkUserExists}
                  onChange={this.onChange}
                  value={this.state.username}
                  field="username"
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
              <div className="pt-3">
               <button type="submit" class="btn btn-primary btn-round float-left" rel="tooltip" data-placement="right" disabled={this.state.isLoading} >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  render() {

    const { username } = this.state

        return username.length ? this.renderProfileForm() : (
          <div style={{height: '100vh'}}></div>
        )

}
}
