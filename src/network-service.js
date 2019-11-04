import axios from 'axios';
import { logout } from './actions/authActions'
import { Redirect } from 'react-router-dom'
export default {
  setupInterceptors: (store) => {

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        //catches if the session ended!
        debugger
        if ( error.response.statusText === "Unauthorized") {
          // <Redirect/>
            // console.log("EXPIRED TOKEN!");
            // localStorage.clear();
            // store.dispatch({ type: UNAUTH_USER });
        }
        return Promise.reject(error);
    });

  }
}