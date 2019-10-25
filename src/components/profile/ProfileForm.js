import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import jwt_decode from 'jwt-decode';

export default class ProfileForm extends Component {

    constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      new_password: '',
      old_password: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
    this.renderProfileForm = this.renderProfileForm.bind(this);

    const token = localStorage.getItem('jwtToken');
    const decodedToken = jwt_decode(token)

    // axios.get(`http://localhost:3001/user/${decodedToken.user_id}`)
    //   .then(res => res)
    //   .then(data => this.setState({username: data.username, email: data.email})
    // )
    // debugger
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
    return (
      <div>
        <div class="card card-plain">
          <div class="card-header">
            <h1 class="text-left">Profile</h1>
          </div>
          <div class="card-body"> 
            <form onSubmit={this.onSubmit}>
              <div className="py-2">
                <TextFieldGroup
                  // error={errors.username}
                  placeholder="Username"
                  icon="icon-single-02"
                  checkUserExists={this.checkUserExists}
                  onChange={this.onChange}
                  value={this.state.username}
                  field="username"
                />
              </div>
              <div className="py-2">
                <TextFieldGroup
                  // error={errors.email}
                  placeholder=""
                  icon="icon-email-85"
                  checkUserExists={this.checkUserExists}
                  onChange={this.onChange}
                  value={this.state.email}
                  field="email"
                />
              </div>
              <div className="py-2">
                <TextFieldGroup
                  // error={errors.password}
                  placeholder="New Password"
                  icon="icon-lock-circle"
                  onChange={this.onChange}
                  value={this.state.new_password}
                  field="new_password"
                  type="password"
                />
              </div>
              <div className="py-2">
                <TextFieldGroup
                  // error={errors.password_confirmation}
                  placeholder="Current Password"
                  icon="icon-lock-circle"
                  onChange={this.onChange}
                  value={this.state.old_password}
                  field="old_password"
                  type="password"
                />
              </div>
              <div className="pt-5">
               <button type="submit" class="btn btn-primary btn-round float-left" rel="tooltip" data-placement="right">Submit</button>
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
