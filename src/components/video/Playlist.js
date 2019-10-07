import React, { Component } from 'react'

export default class Playlist extends Component {
    render() {
        return (
            <div className="playlist center-horizontally">
                <div className="playlist-info row">
                    <div className="track-art col-md-4">
                        art goes here
                    </div>
                    <div className="track-info col-md-8">
                        track information goes here
                    </div>
                </div>
                <div className="playlist">

                </div>
            </div>
        )
    }
}
