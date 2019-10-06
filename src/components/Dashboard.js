import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard center-horizontally">
      
        <div className="dashboard-tiles col-md-9 col-sm-12 " >
        <div className="text-center mt-4">
          <h1> Hi, I'm your video concierge </h1>
          <h3 > It's Monday afternoon, I've for videos for ...</h3>
        </div>

          <div className="row center-horizontally pt-4">
              <div class="card bg-light-white bordered-card col-md-3 col-sm-5">
                <div class="card-body text-center">
                  <div class="justify-content-center">
                    <div class="numbers">
                      <i class="fa fa-award"></i>
                        <p class="card-category text-white mt-4">DAILY 3</p>
                      </div>
                  </div>
                </div>
              </div>
              <div class="card bg-light-white bordered-card col-md-3 col-sm-5">
                <div class="card-body text-center">
                  <div class="justify-content-center">
                    <div class="numbers">
                    <i class="fa fa-chart-line"></i>
                      <p class="card-category text-white mt-4">TOP TRENDING</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bg-light-white bordered-card col-md-3 col-sm-5">
                <div class="card-body text-center">
                  <div class="justify-content-center">
                    <div class="numbers">
                    <i class="fa fa-newspaper"></i>
                      <p class="card-category text-white mt-4">IN THE NEWS </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card bg-light-white bordered-card col-md-3 col-sm-5">
                <div class="card-body text-center">
                  <div class="justify-content-center">
                    <div class="numbers">
                    <i class="fa fa-hourglass-half"></i>
                      <p class="card-category text-white mt-4">BRAND NEW</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card  bg-light-white bordered-card col-md-3 col-sm-5">
                <div class="card-body text-center">
                  <div class="justify-content-center">
                    <div class="numbers">
                    <i class="fa fa-flask"></i>
                      <p class="card-category text-white mt-4">GEEKY</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card bg-light-white bordered-card col-md-3 col-sm-5">
                <div class="card-body text-center">
                  <div class="justify-content-center">
                    <div class="numbers">
                    
                    <i class="fa fa-grin-squint-tears"></i>
                      <p class="card-category text-white mt-4">FUNNY</p>
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
