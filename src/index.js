
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greetings from './components/Greetings';
import Dashboard from './components/Dashboard';
import SignupPage from './components/signup/SignupPage';
import Playlist from './components/video/Playlist';
import VideoPage from './components/video/VideoPage';
import LoginPage from './components/login/LoginPage';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'
import setAuthorizationToken from './utils/setAuthorizationToken'
import jwt_decode from 'jwt-decode';
import { setCurrentUser} from './actions/authActions'
import requireAuth from './utils/requireAuth'
import Profile from './components/profile/ProfilePage';
import { logout } from './actions/authActions'
import axios from 'axios'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
  )
)

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)));
}


render((
  <Provider store={store}>
    <Router>
      <div className="index-page" >
        <Route path="/" component={App} />
        <Route exact path="/" component={Greetings} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={requireAuth(Profile)} />
        <Route path="/playlists" component={requireAuth(Dashboard)} />
        <Route path="/playlist/:name" component={requireAuth(Playlist)} />
        <Route path="/video/:id" component={requireAuth(VideoPage)} />
        
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));

const UNAUTHORIZED = 401;
// const {dispatch} = reduxStore
axios.interceptors.response.use(
  response => response,
  error => {
    const {status} = error.response;
    debugger
    if (status === UNAUTHORIZED) {
      logout()
    }
   return Promise.reject(error);
 }
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
