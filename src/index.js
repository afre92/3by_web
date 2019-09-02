
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

render((
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Greetings} />
      <Route path="/signup" component={SignupPage} />
    </div>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
