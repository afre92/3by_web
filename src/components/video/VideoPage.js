import React, { Component } from 'react'
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'

export default class VideoPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      video: [],
      next: '',
      prev: ''
    }

    const videoId = this.props.match.params.id

      axios.get(`http://localhost:3001/video/${videoId}`)
        .then(res => res)
        .then(res => this.setState({video: res.data.video, next: res.data.next, prev: res.data.previous})
      )
  }

  renderVideo() {
        return (
      
      <div class="section profile-page">
        <div class="wrapper mb-5 container">
          <div class="page-header">
            <h3 className="text-center">helloet ehre</h3>
              <div className="video-page center-horizontally">
                
                <iframe width="1008" height="567" id="ifrm" src="https://www.youtube.com/embed/Ghywp7i032A?rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
              <div className="video-reactions display-inline center-horizontally section">
                  <img src="/assets/img/angry-grey.png" alt="Rounded" className="img-fluid rounded shadow reaction-emoji angry" />
                  <img src="/assets/img/in-love-grey.png" alt="Rounded" className="img-fluid rounded shadow reaction-emoji in-love" />
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
