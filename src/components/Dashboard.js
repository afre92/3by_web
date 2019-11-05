import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {


  render() {
    return (
<div className="landing-page">
<div className="page-header" >
      <img src="../assets/img/blob.png" className="path" alt="background-shapes"/>
      <img src="../assets/img/path2.png" className="path2" alt="background-shapes"/>
      <img src="../assets/img/triunghiuri.png" className="shapes triangle" alt="background-shapes"/>
      <img src="../assets/img/waves.png" className="shapes wave" alt="background-shapes" />
      <img src="../assets/img/cercuri.png" className="shapes circle" alt="background-shapes"/>
      <div className="dashboard center-horizontally">
      
        <div className="dashboard-tiles col-md-9 col-sm-12 " >
        <div className="text-center mt-4">
          <h1> Hi, I'm your video concierge </h1>
          <h3 > It's Monday afternoon, I've for videos for ...</h3>
        </div>

          <div className="row center-horizontally pt-4">
              <div className="card bg-light-white bordered-card col-md-3 col-sm-5">
              <Link to={`/playlist/chilling`} >
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers" data-playlist="chilling">
                      <i className="fa fa-award"></i>
                        <p className="card-category text-white mt-4">CHILLING</p>
                      </div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="card bg-light-white bordered-card col-md-3 col-sm-5" >
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    <i className="fa fa-chart-line"></i>
                      <p className="card-category text-white mt-4">TOP TRENDING</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-light-white bordered-card col-md-3 col-sm-5">
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    <i className="fa fa-newspaper"></i>
                      <p className="card-category text-white mt-4">IN THE NEWS </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-light-white bordered-card col-md-3 col-sm-5">
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    <i className="fa fa-hourglass-half"></i>
                      <p className="card-category text-white mt-4">BRAND NEW</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  bg-light-white bordered-card col-md-3 col-sm-5">
                <div className="card-body text-center">
                  <div className="justify-content-center">
                    <div className="numbers">
                    <i className="fa fa-flask"></i>
                      <p className="card-category text-white mt-4">GEEKY</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-light-white bordered-card col-md-3 col-sm-5">
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
            <div className="btn-wrapper col-md-12 text-center mt-5">
              <p className="category text-primary d-inline">VIEW MORE</p>
              <a href="#blk" className="btn btn-primary btn-link btn-sm">
                <i className="tim-icons icon-minimal-down"></i>
              </a>
            </div>
        </div>
   
      </div> 

      </div>

      </div> 
    )
  }
}
