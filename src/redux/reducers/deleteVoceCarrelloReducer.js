import {
  FETCH_CARRELLO_REQUEST,
  FETCH_CARRELLO_SUCCESS,
  FETCH_CARRELLO_FAILURE,
  DELETE_VOCE_CARRELLO_SUCCESS,
} from "../action/fetchVociCarrelloAction"

const initialState = {
  voci: [],
  loading: false,
  error: null,
}

const carrelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARRELLO_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_CARRELLO_SUCCESS:
      return { ...state, loading: false, voci: action.payload }
    case FETCH_CARRELLO_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case DELETE_VOCE_CARRELLO_SUCCESS:
      return {
        ...state,
        voci: state.voci.filter((voce) => voce.id !== action.payload),
      }
    default:
      return state
  }
}

export default carrelloReducer
