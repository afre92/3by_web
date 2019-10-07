import React, { Component } from 'react'

export default class Playlist extends Component {
    render() {
        return (
            <div className="playlist center-horizontally pt-5">
                <div className="col-md-9 col-sm-12">
                    <div className="playlist-info row">
                        <div className="track-art col-md-4 center-horizontally">
                            <img src="assets/img/ryan.jpg" alt="Rounded image" class="img-fluid rounded shadow art" />
                        </div>
                    <div className="track-info col-md-8">
                        <div className="track-title text-white">
                            <h1 className="mb-0"> PLAYLIST TITLE</h1>
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
                            <th scope="col">Creator</th>
                            <th scope="col">Views</th>
                            <th scope="col">Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td scope="row" className="center-horizontally">
                                    <img src="assets/img/lora.jpg" alt="Rounded image" className="img-fluid rounded shadow playlist-thumbnail" />
                                </td>
                                <td><p>Mark Otto</p></td>
                                <td><p>456M</p> </td>
                            <td><p>34 sec</p></td>
                            </tr>
                            <tr className="text-center">
                                <td scope="row" className="center-horizontally">
                                    <img src="assets/img/lora.jpg" alt="Rounded image" className="img-fluid rounded shadow playlist-thumbnail" />
                                </td>
                                <td><p> Jacob Thornton</p></td>
                                <td><p>33k</p></td>
                                <td><p>1:06 min</p></td>
                            </tr>
                            <tr className="text-center">
                                <td scope="row" className="center-horizontally">
                                    <img src="assets/img/lora.jpg" alt="Rounded image" className="img-fluid rounded shadow playlist-thumbnail" />
                                </td>
                                <td><p>Larry the Bird</p></td>
                                <td><p>234K</p></td>
                                <td><p>4:40 min</p></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
