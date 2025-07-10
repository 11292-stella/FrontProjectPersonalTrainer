import {
  FETCH_ESERCIZI_REQUEST,
  FETCH_ESERCIZI_SUCCESS,
  FETCH_ESERCIZI_FAILURE,
} from "../action/esercizioAction"

const initialState = {
  exercise: [],
  loading: false,
  error: null,
}

const eserciziReduce = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ESERCIZI_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_ESERCIZI_SUCCESS:
      return { ...state, loading: false, exercise: action.payload, error: null }
    case FETCH_ESERCIZI_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default eserciziReduce
