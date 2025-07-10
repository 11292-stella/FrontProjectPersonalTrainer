import {
  FETCH_SCHEDA_SUCCESS,
  FETCH_SCHEDA_FAILURE,
  FETCH_SCHEDA_REQUEST,
} from "../action/schedaActions"

const initialState = {
  loading: false,
  error: null,
  esercizi: [],
}

const schedaReduce = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEDA_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_SCHEDA_SUCCESS:
      return { ...state, loading: false, esercizi: action.payload }
    case FETCH_SCHEDA_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default schedaReduce
