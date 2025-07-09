import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../action/authActions"

const initialState = {
  token: null,
  isLoggedIn: false,
  error: null,
}

const authLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, error: null }

    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        error: null,
      }

    case "LOGIN_FAILURE":
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default authLogReducer
