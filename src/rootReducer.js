import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import playlists from './reducers/playlists';

export default combineReducers({
  flashMessages,
  auth,
  playlists
})