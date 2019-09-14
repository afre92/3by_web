import axios from "axios";

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('http://localhost:3001/users', userData)
  }
}

export function userExists(id) {
  return dispatch => {
    return axios.get(`http://localhost:3001/check_user/${id}`)
  }
}