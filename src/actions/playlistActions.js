import { FETCH_PLAYLIST } from './types';
import axios from "axios";

export const fetchPlaylist = () => dispatch => {
  fetch('http://localhost:3001/playlists/chilling')
    .then(res => res.json())
    .then(playlist =>
      dispatch({
        type: FETCH_PLAYLIST,
        payload: playlist
      })
    )
  }
