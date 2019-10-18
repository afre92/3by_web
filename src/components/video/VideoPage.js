import React, { Component } from 'react'

export default class VideoPage extends Component {
  render() {
    return (
      <div class="profile-page">
        <div class="wrapper mb-5 container">
          <div class="page-header">
          <h3>helloet ehre</h3>
              <div className="video-page center-horizontally">
                
                <iframe width="1008" height="567" id="ifrm" src="https://www.youtube.com/embed/Ghywp7i032A?rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
