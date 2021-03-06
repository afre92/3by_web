import React, { Component } from 'react';
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
        this.videoRatingBar = this.videoRatingBar.bind(this)
    }

    componentDidMount(){
        const { name } = this.props.match.params
        axios.get(`${process.env.REACT_APP_API_URL}/playlist/${name}`)
        .then(res => res)
        .then(playlist => this.setState({playlist: playlist.data})
      )
    }

    onClick(param, e){
        this.props.history.push(`/video/${param}`)
    }

    videoRatingBar(likes, dislikes){
        const totalReactions = likes + dislikes
        const percentage = Math.round(likes/totalReactions * 100)
        return (
        <div className="progress">
            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" style={{width: `${percentage}%`}}>
                <span className="progress-value">{percentage}%</span>    
            </div>
        </div>
        )
    }


    renderPlaylist(){
        const videosList = this.state.playlist.videos[0].map(video => (

            <tr className="text-center" key={video.id} onClick={this.onClick.bind(this, video.id)}>
                <td className="center-horizontally">
                    <img src={video.thumbnails.default.url} alt="Rounded" className="img-fluid rounded shadow playlist-thumbnail" />
                </td>
                <td className="video-title"><p>{video.title}</p></td>
                <td><p>{video.view_count > 1000 && video.view_count < 1000000? `${Math.round(video.view_count/1000)}K` : `${(video.view_count/1000000).toFixed(2)}M`}</p></td>
                <td>
                    {this.videoRatingBar(video.like_count, video.dislike_count)}
                </td>
                <td><p>{video.length.substring(video.length.indexOf(":") + 1)}</p></td> 
            </tr>
        
        ))
        return (
            <div className=" playlist col-md-12 section ">
            <div className="page-header">
            <div className=" center-horizontally pt-5" >
            <div className="col-md-9 col-sm-12 pb-5">
                <div className="playlist-info row">
                    <div className="track-art col-md-4 center-horizontally">
                        <img src={this.state.playlist.videos[0][0].thumbnails.medium.url} alt="Rounded" className="img-fluid rounded shadow art" />
                    </div>
                <div className="track-info col-md-8">
                    <div className="track-title text-white">
                        <h1 className="mb-0 playlist-title"> {this.state.playlist.name}</h1>
                        <hr className="line-primary"></hr>
                    </div>
                    <div className="track-creator text-white pt-3">
                        <h6 className="display-inline "> 
                            <b className="pr-3">Creator Name</b>
                            <p className="pr-3">456K Views</p>
                            <p className="">2 months ago</p>
                        </h6>
                    </div>
                    <div className="track-info text-white pt-3">
                    Nulla ut blandit sem, et pretium arcu. Maecenas neque elit, pulvinar ac elementum sit amet, imperdiet vitae diam. Cras eu ornare dolor. Proin nec lorem porttitor, mattis mi ac, pretium mauris. Aenean tristique sagittis justo ultrices efficitur. Curabitur rhoncus luctus felis, nec euismod mauris scelerisque vel.
                    </div>
                </div>
            </div>
            <div className="white-line mt-5 mb-5"></div>
                <div className="playlist-table">
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
        </div>
        </div>
        )
    }

    render() {

        const { videos } = this.state.playlist

            return videos.length ? this.renderPlaylist() : (
              <div style={{height: '100vh'}}></div>
            )

    }
}


export default Playlist