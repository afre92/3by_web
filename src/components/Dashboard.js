import React, { Component } from 'react'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const playlist = e.target.dataset.playlist
    this.props.history.push(`/playlist/${playlist}`);
  }

  render() {
    return (
<div className="landing-page">
<div className="page-header" >
      <img src="../assets/img/blob.png" class="path" />
      <img src="../assets/img/path2.png" class="path2" />
      <img src="../assets/img/triunghiuri.png" class="shapes triangle" />
      <img src="../assets/img/waves.png" class="shapes wave" />
      <img src="../assets/img/cercuri.png" class="shapes circle" />
      <div className="dashboard center-horizontally">
      
        <div className="dashboard-tiles col-md-9 col-sm-12 " >
        <div className="text-center mt-4">
          <h1> Hi, I'm your video concierge </h1>
          <h3 > It's Monday afternoon, I've for videos for ...</h3>
        </div>

          <div className="row center-horizontally pt-4">
              <div className="card bg-light-white bordered-card col-md-3 col-sm-5" onClick={this.onClick}>
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers" data-playlist="chilling">
                      <i className="fa fa-award"></i>
                        <p className="card-category text-white mt-4">CHILLING</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card bg-light-white bordered-card col-md-3 col-sm-5" onClick={this.onClick} >
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    <i className="fa fa-chart-line"></i>
                      <p className="card-category text-white mt-4">TOP TRENDING</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-light-white bordered-card col-md-3 col-sm-5" onClick={this.onClick}>
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    <i className="fa fa-newspaper"></i>
                      <p className="card-category text-white mt-4">IN THE NEWS </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-light-white bordered-card col-md-3 col-sm-5" onClick={this.onClick}>
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    <i className="fa fa-hourglass-half"></i>
                      <p className="card-category text-white mt-4">BRAND NEW</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  bg-light-white bordered-card col-md-3 col-sm-5" onClick={this.onClick}>
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    <i className="fa fa-flask"></i>
                      <p className="card-category text-white mt-4">GEEKY</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-light-white bordered-card col-md-3 col-sm-5" onClick={this.onClick}>
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    
                    <i className="fa fa-grin-squint-tears"></i>
                      <p className="card-category text-white mt-4">FUNNY</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="btn-wrapper col-md-12 text-center mt-5">
              <p class="category text-primary d-inline">VIEW MORE</p>
              <a href="#blk" class="btn btn-primary btn-link btn-sm">
                <i class="tim-icons icon-minimal-down"></i>
              </a>
            </div>
        </div>
   
      </div> 

      </div>

      </div> 
    )
  }
}
