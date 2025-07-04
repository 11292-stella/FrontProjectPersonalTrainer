import axios from "axios"

export const LOGIN_REQUEST = "LOGIN_REQUEST"

export const LOGIN_SUCCES = "LOGIN_SUCCES"

export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCES,
  payload: user,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(loginRequest())

    axios
      .post("http://localhost:8080/auth/login", credentials)
      .then((response) => {
        dispatch(loginSuccess(response.data))
      })
      .catch((error) => {
        dispatch(loginFailure(error.message))
      })
  }
}
