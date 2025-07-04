import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCES,
} from "../action/authActions"

const initialState = {
  loading: false,
  user: null,
  error: null,
}

const authLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case LOGIN_SUCCES:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default authLogReducer
