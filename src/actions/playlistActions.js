import { FETCH_PLAYLIST } from './types';
import axios from "axios";

export function fetchPlaylist(){
    return dispatch => {
      axios.get('http://localhost:3001/playlist/chilling')
        .then(res => res)
        .then(playlist =>
          dispatch({
            type: FETCH_PLAYLIST,
            payload: playlist
          })
      )
    } 
  }
