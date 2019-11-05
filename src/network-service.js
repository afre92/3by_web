import axios from 'axios';

export default {
  setupInterceptors: (store) => {
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if ( error.response.statusText === "Unauthorized") {
          localStorage.clear();
          window.location = '/login';
        }
        return Promise.reject(error);
    });

  }
}