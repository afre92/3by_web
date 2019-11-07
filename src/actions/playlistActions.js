import { FETCH_PLAYLIST } from './types';
import axios from "axios";

export function fetchPlaylist(){
    return dispatch => {
      axios.get(`${process.env.REACT_APP_API_URL}/playlist/chilling`)
        .then(res => res)
        .then(playlist =>
          dispatch({
            type: FETCH_PLAYLIST,
            payload: playlist
          })
      )
    } 
  }
