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

    default:
      return state
  }
}

export default carrelloReducer
