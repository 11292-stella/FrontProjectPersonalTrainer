import {
  FETCH_PRODOTTI_REQUEST,
  FETCH_PRODOTTI_SUCCESS,
  FETCH_PRODOTTI_FAILURE,
} from "../action/prodottiActions"

const initialState = {
  prodotti: [],
  loading: false,
  error: null,
}

const prodottiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODOTTI_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_PRODOTTI_SUCCESS:
      return { ...state, loading: false, prodotti: action.payload, error: null }

    case FETCH_PRODOTTI_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default prodottiReducer
