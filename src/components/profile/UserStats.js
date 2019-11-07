import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class UserStats extends Component {

  constructor(props) {
    super(props)

    this.state = {
      liked: [],
      disliked: [],
      isLoading: true
    }

    this.renderUserStats = this.renderUserStats.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.reactionRows = this.reactionRows.bind(this)
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    axios.get(`${process.env.REACT_APP_API_URL}/user/${this.props.user.username}/reactions`)
      .then((err) => err)
      .then(res => {
         this.setState({liked: res.data.liked, disliked: res.data.disliked, isLoading: false})
      }
    )
  }

  reactionRows(videos){
    const tableItems = videos.map( video => (
      <tr key={video.id} >
        <td>
          <img src={video.thumbnails.default.url} alt="Rounded" className="img-fluid rounded shadow reactions-list-thumbnail" />
        </td>
        <td >
          <Link className="text-white" to={`/video/${video.id}`}>{video.title} </Link>
        </td>
        <td className="capitalize">
          {video.playlist}
        </td>
    </tr>
    ))
    return tableItems
  }

  renderUserStats() {
    const likedVideos = this.reactionRows(this.state.liked)
    const dislikedVideos = this.reactionRows(this.state.disliked)

    return (
            <div className="card card-coin card-plain">
              <div className="card-header">
                {/* <img src="/assets/img/mike.jpg" className="img-center img-fluid rounded-circle"/> */}
                <h2 className="title">Reactions</h2>
              </div>
              <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-primary justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#linka">
                      Liked
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#linkb">
                      Disliked
                    </a>
                  </li>
                </ul>
                <div className="tab-content tab-subcategories">
                  <div className="tab-pane active" id="linka">
                    <div className="table-responsive">
                      <table className="table tablesorter " id="plain-table">
                        <thead className=" text-primary">
                          <tr>
                            <th className="header">
                              
                            </th>
                            <th className="header ">
                              TITLE
                            </th>
                            <th className="header">
                              PLAYLIST
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {likedVideos.length > 0 ? likedVideos : <tr><td></td><td className="text-right">No liked videos...</td><td></td></tr>}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane" id="linkb">
                    <div className="table-responsive">
                      <table className="table tablesorter " id="plain-table">
                        <thead className=" text-primary">
                          <tr>
                            <th className="header">
                              
                            </th>
                            <th className="header ">
                              TITLE
                            </th>
                            <th className="header">
                              PLAYLIST
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {dislikedVideos.length > 0 ? dislikedVideos : <tr><td></td><td className="text-right">No disliked videos...</td><td></td></tr>}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            </div>
    )
  }

  render() {
    const { isLoading } = this.state
      return isLoading ?  ( <div style={{height: '100vh'}}></div> ) : this.renderUserStats()
  }
}
