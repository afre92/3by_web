import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';

export default class ProfileForm extends Component {

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

  render() {
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
                  placeholder="Password"
                  icon="icon-lock-circle"
                  onChange={this.onChange}
                  value={this.state.password}
                  field="password"
                  type="password"
                />
              </div>
              <div className="py-2">
                <TextFieldGroup
                  // error={errors.password_confirmation}
                  placeholder="Password confirmation"
                  icon="icon-lock-circle"
                  onChange={this.onChange}
                  value={this.state.password_confirmation}
                  field="password_confirmation"
                  type="password"
                />
              </div>
              <div className="pt-5">
               <button type="submit" class="btn btn-primary btn-round float-left" rel="tooltip" data-original-title="Can't wait for your message" data-placement="right">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
