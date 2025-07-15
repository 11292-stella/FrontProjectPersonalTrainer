import {
  DELETE_SCHEDA_SUCCESS,
  DELETE_SCHEDA_REQUESTE,
  DELETE_SCHEDA_FAILURE,
} from "../action/deleteSchedaActions"

const initialState = {
  loading: false,
  success: false,
  error: null,
}

const deleteSchedaReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SCHEDA_REQUESTE:
      return { loading: true, success: false, error: null }

    case DELETE_SCHEDA_SUCCESS:
      return { loading: false, success: true, error: null }

    case DELETE_SCHEDA_FAILURE:
      return { loading: false, success: false, error: action.payload }

    default:
      return state
  }
}

export default deleteSchedaReducer
