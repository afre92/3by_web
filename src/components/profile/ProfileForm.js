import React, { Component } from 'react'

export default class ProfileForm extends Component {
  render() {
    return (
      <div>
      <div class="card card-plain">
              <div class="card-header">
                <h1 class="text-left">Contact</h1>
                {/* <h5 class="text-on-back">03</h5> */}
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Your Name</label>
                        <input type="text" class="form-control" value="Mike" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="mike@email.com" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" value="001-12321345" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Company</label>
                        <input type="text" class="form-control" value="CreativeTim" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="Hello there!" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-round float-right" rel="tooltip" data-original-title="Can't wait for your message" data-placement="right">Send text</button>
                </form>
              </div>
            </div>
          </div>
    )
  }
}
