import { FETCH_PLAYLIST } from '../actions/types'

const initalState = {
  playlist: {}
}

export default function(state = initalState, action) {
  
  switch(action.type){
    case FETCH_PLAYLIST:
      return {
        ...state,
        playlist: action.payload.data
      }
    default:
      return state;
  }
}