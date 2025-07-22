import axios from "axios"

export const LOGIN_REQUEST = "LOGIN_REQUEST"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const LOGOUT = "LOGOUT"

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const logoutUser = () => {
  localStorage.removeItem("token")
  return { type: LOGOUT }
}

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(loginRequest())

    axios
      .post(
        "https://conservation-umeko-stella02-65bf7872.koyeb.app/auth/login",
        credentials
      )
      .then((response) => {
        const token = response.data

        console.log(
          "Token ottenuto dalla risposta del backend (corretto):",
          token
        )

        if (token) {
          localStorage.setItem("token", token)
          dispatch(loginSuccess(token))
        } else {
          console.error(
            "Il token non è stato ricevuto come stringa valida dal server."
          )
          dispatch(loginFailure("Token non ricevuto o non valido dal server."))
        }
      })
      .catch((error) => {
        console.error("Errore nella chiamata di login:", error)

        dispatch(loginFailure(error.message))
      })
  }
}
