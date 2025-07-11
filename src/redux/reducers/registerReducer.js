import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../action/registerActions"

const initialState = {
  loading: false,
  user: null,
  error: null,
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case REGISTER_SUCCESS:
      console.log("Payload ricevuto dal reducer:", action.payload)
      return {
        ...state,
        loading: false,
        user: action.payload,
      }

    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default registerReducer
