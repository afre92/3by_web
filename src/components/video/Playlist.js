import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlaylist } from '../../actions/playlistActions'
import axios from "axios";

class Playlist extends Component {

    constructor(props){
        super(props)
        this.state = {
            playlist: {
                videos: [],
                name: ""
            }
        }

        this.renderPlaylist = this.renderPlaylist.bind(this)
    }

    componentWillMount(){
        axios.get('http://localhost:3001/playlist/chilling')
        .then(res => res)
        .then(playlist => this.setState({playlist: playlist.data})
      )
    }


    renderPlaylist(){
        const videosList = this.state.playlist.videos[0].map(video => (
            
            <tr className="text-center" key={video.id}>
            <td scope="row" className="center-horizontally">
                <img src={video.thumbnails.default.url} alt="Rounded image" className="img-fluid rounded shadow playlist-thumbnail" />
            </td>
            <td><p>{video.title}</p></td>
            <td><p>{video.view_count > 1000 && video.view_count < 1000000? `${Math.round(video.view_count/1000)}K` : `${Math.round(video.view_count/1000000)}M`}</p></td>
            <td><p>4:40 min</p></td>
            <td><p>4:40 min</p></td>
        </tr>
        ))
        return (
            <div className="playlist center-horizontally pt-5" >
            <div className="col-md-9 col-sm-12">
                <div className="playlist-info row">
                    <div className="track-art col-md-4 center-horizontally">
                        <img src="assets/img/ryan.jpg" alt="Rounded image" class="img-fluid rounded shadow art" />
                    </div>
                <div className="track-info col-md-8">
                    <div className="track-title text-white">
                        <h1 className="mb-0 playlist-title"> {this.state.playlist.name}</h1>
                        <hr class="line-success"></hr>
                    </div>
                    <div className="track-creator text-white pt-3">
                        <h6 className="display-inline "> 
                            <b className="pr-3">Creator Name</b>
                            <p className="pr-3">456K Views</p>
                            <p className="">2 months ago</p>
                        </h6>
                    </div>
                    <div className="track-info text-white pt-3">
                    Nam id dui leo. Praesent fringilla blandit congue. Praesent ut elit nibh. Aenean vitae magna et orci scelerisque pulvinar. Vivamus ligula nunc, facilisis ut ullamcorper at,
                     ultricies sit amet mauris. Sed nibh sem, lobortis eget dui ut, scelerisque tempus orci. Praesent ut elit nibh. Aenean vitae magna et orci scelerisque pulvinar. Vivamus ligula nunc, facilisis ut ullamcorper at,
                     ultricies sit amet mauris. Sed nibh sem, lobortis eget dui ut
                    </div>
                </div>
            </div>
            <div className="white-line mt-5 mb-5"></div>
                <div className="playlist">
                <table className="table playlist-table">
                    <thead>
                        <tr className="text-center">
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Views</th>
                        <th scope="col">Likes</th>
                        <th scope="col">Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videosList}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }

    render() {

        const { videos } = this.state.playlist

            return videos.length ? this.renderPlaylist() : (
              <span>Loading wells...</span>
            )

    }
}

// function mapStateToProps(state) {
//     return {
//         playlist: state.playlists.playlist
//     }
//   }

export default connect(null, { fetchPlaylist})(Playlist)