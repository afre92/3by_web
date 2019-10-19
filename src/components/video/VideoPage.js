import React, { Component } from 'react'

export default class VideoPage extends Component {
  render() {
    return (
      <div class="section profile-page">
        <div class="wrapper mb-5 container">
          <div class="page-header">
            <h3 className="text-center">helloet ehre</h3>
              <div className="video-page center-horizontally">
                
                <iframe width="1008" height="567" id="ifrm" src="https://www.youtube.com/embed/Ghywp7i032A?rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
              <div className="video-reactions display-inline center-horizontally section">
                  <img src="assets/img/angry.png" alt="Rounded" className="img-fluid rounded shadow reaction-emoji" />
                  <img src="assets/img/in-love.png" alt="Rounded" className="img-fluid rounded shadow reaction-emoji" />
                </div>
          </div>
        </div>
      </div>
    )
  }
}
