import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard center-horizontally">
        <div className="dashboard-tiles col-8 " >
        <div className="flex-container">
        <div class="card card-stats bg-danger col-md-4">
              <div class="card-body">
                <div class="justify-content-center">
                  <div class="numbers">
                    <p class="card-title">100%</p>
                    <p class="card-category text-white">Safe</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-stats bg-danger col-md-4">
              <div class="card-body">
                <div class="justify-content-center">
                  <div class="numbers">
                    <p class="card-title">100%</p>
                    <p class="card-category text-white">Safe</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-stats bg-danger col-md-4">
              <div class="card-body">
                <div class="justify-content-center">
                  <div class="numbers">
                    <p class="card-title">100%</p>
                    <p class="card-category text-white">Safe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-container">
        <div class="card card-stats bg-danger col-md-4">
              <div class="card-body">
                <div class="justify-content-center">
                  <div class="numbers">
                    <p class="card-title">100%</p>
                    <p class="card-category text-white">Safe</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-stats bg-danger col-md-4">
              <div class="card-body">
                <div class="justify-content-center">
                  <div class="numbers">
                    <p class="card-title">100%</p>
                    <p class="card-category text-white">Safe</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-stats bg-danger col-md-4">
              <div class="card-body">
                <div class="justify-content-center">
                  <div class="numbers">
                    <p class="card-title">100%</p>
                    <p class="card-category text-white">Safe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}
