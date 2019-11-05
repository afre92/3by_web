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
      prev: '',
      liked: false,
      disliked: false
    }
    this.fetchData = this.fetchData.bind(this)
    this.onClickReactions = this.onClickReactions.bind(this)
  }

  fetchData(videoId){
    axios.get(`http://localhost:3001/video/${videoId}`)
      .then(res => res)
      .then(res => this.setState({
        video: res.data.video, 
        next: res.data.next, 
        prev: res.data.previous, 
        liked: res.data.liked,
        disliked: res.data.disliked
      })
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

  onClickReactions(e){
    const videoId = e.target.getAttribute('data-video-id')
    const reaction = e.target.getAttribute('data-reaction')
    if (!this.state[reaction]){
      axios.post(`http://localhost:3001/video/${videoId}/reaction`, {reaction: reaction})
        .then(res => res)
        .then(res => this.setState({liked: res.data.liked, disliked: res.data.disliked})
      )
    }
  }

  renderVideo() {
    const { video, next, prev, liked, disliked} = this.state
    const angryEmojiUrl = disliked ? "/assets/img/angry.png" : "/assets/img/angry-grey.png"
    const inLoveEmojiUrl = liked ? "/assets/img/in-love.png" : "/assets/img/in-love-grey.png"
    return (
      <div className="col-md-12 mb-100">
        <div className="profile-page">
          <div className="wrapper section">
            <div>
              <h3 className="text-center ">{video.title}
                <div className="center-horizontally">
                  <hr className="line-primary centered-line mb-0"></hr>
                </div>
              </h3>
              <div className="mb-5 mt-5 row center-horizontally">
                <div className="mr-5 col-md-2 video-reactions col-sm-0">
                  <Link to={`/video/${prev}`}>
                    <img src="/assets/img/left-chevron.png" alt="Rounded" className="img-fluid rounded shadow control-arrow" />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className='videoWrapper'>                
                    <iframe src={`https://www.youtube.com/embed/${video.yt_id}?rel=0&showinfo=0`} frameborder="0"></iframe>
                  </div>
                </div>

                <div className="ml-5  col-md-2 video-reactions col-sm-0">
                  <Link to={`/video/${next}`}>
                    <img src="/assets/img/right-chevron.png" alt="Rounded" className="img-fluid rounded shadow control-arrow " />
                  </Link>
                </div>
              </div>
              <div className="display-inline video-controls">

                <div className="video-reactions">
                  <div className="text-center">
                    <h4>REACT:</h4>
                  </div>
                  <img src={angryEmojiUrl} alt="Rounded" className="img-fluid rounded shadow reaction-emoji angry" onClick={this.onClickReactions} data-video-id={video.id} data-reaction="disliked"/>
                  <img src={inLoveEmojiUrl} alt="Rounded" className="img-fluid rounded shadow reaction-emoji in-love" onClick={this.onClickReactions} data-video-id={video.id} data-reaction="liked"/>
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
        <div style={{height: '100vh'}}></div>
      )
  }
}

