import axios from "axios";

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${process.env.REACT_APP_API_URL}/users`, userData)
  }
}

export function userExists(id) {
  return dispatch => {
    return axios.get(`${process.env.REACT_APP_API_URL}/check_user/${id}`)
  }
}