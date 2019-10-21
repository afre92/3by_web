import React, { Component } from 'react'
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import { Link } from 'react-router-dom'

export default class VideoPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      video: [],
      next: '',
      prev: ''
    }
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData(videoId){
      axios.get(`http://localhost:3001/video/${videoId}`)
        .then(res => res)
        .then(res => this.setState({video: res.data.video, next: res.data.next, prev: res.data.previous})
      )
  }

  componentDidMount() {
      const videoId = this.props.match.params.id
      this.fetchData(videoId)
  }

  componentWillReceiveProps(new_props) {
    const videoId = new_props.match.params.id
    this.fetchData(videoId)
  }

  renderVideo() {
    const { video, next, prev} = this.state
    return (
      <div className="col-md-12 mb-100">
      <div className="profile-page">
        <div className="wrapper container">
          <div className=" ">
            <h3 className="text-center ">{video.title}
            <div className="center-horizontally">
              <hr className="line-primary centered-line"></hr>
            </div>
            </h3>
            
              <div className="video-page center-horizontally mb-5">
                
                <iframe width="907" height="510" id="ifrm" src={`https://www.youtube.com/embed/${video.yt_id}?rel=0&showinfo=0`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
              <div className="display-inline video-controls">
                <div className="ml-5">
                  <Link to={`/video/${prev}`}>
                    <img src="/assets/img/left-chevron.png" alt="Rounded" className="img-fluid rounded shadow control-arrow" />
                  </Link>
                </div>
                <div className="video-reactions">
                    <img src="/assets/img/angry-grey.png" alt="Rounded" className="img-fluid rounded shadow reaction-emoji angry" />
                    <img src="/assets/img/in-love-grey.png" alt="Rounded" className="img-fluid rounded shadow reaction-emoji in-love" />
                </div>
                <div className="mr-5">
                  <Link to={`/video/${next}`}>
                    <img src="/assets/img/right-chevron.png" alt="Rounded" className="img-fluid rounded shadow control-arrow " />
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

  render() {
      const { video } = this.state
      return !isEmpty(video) ? this.renderVideo() : (
        <span>Loading wells...</span>
      )
  }
}