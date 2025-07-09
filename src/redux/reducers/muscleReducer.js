import {
  FETCH_MUSCLES_REQUEST,
  FETCH_MUSCLES_SUCCESS,
  FETCH_MUSCLES_FAILURE,
} from "../action/muscleActions"

const initialState = {
  muscles: [],
  loading: false,
  error: null,
}

const muscleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSCLES_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_MUSCLES_SUCCESS:
      return { ...state, loading: false, muscles: action.payload, error: null }
    case FETCH_MUSCLES_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default muscleReducer
