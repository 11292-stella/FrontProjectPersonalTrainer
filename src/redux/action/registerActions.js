import axios from "axios"
import { loginFailure } from "./authActions"
export const REGISTER_REQUEST = "REGISTER_REQUEST"

export const REGISTER_SUCCESS = "REGISTER_SUCCESS"

export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
})

export const registerRequest = (user) => ({
  type: REGISTER_REQUEST,
  payload: user,
})

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
})

export const registerUser = (credentials) => {
  return (dispatch) => {
    dispatch(registerRequest(credentials))

    axios
      .post("http://localhost:8080/auth/register", credentials)
      .then((response) => {
        dispatch(registerSuccess(response.data))
      })
      .catch((error) => {
        dispatch(registerFailure(error.message))
      })
  }
}
