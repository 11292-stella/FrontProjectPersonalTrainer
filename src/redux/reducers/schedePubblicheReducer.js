import { FETCH_SCHEDE_PUBBLICHE_SUCCESS } from "../action/schedaActions"

const initialState = {
  listaPubbliche: [],
}

const schedePubblicheReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEDE_PUBBLICHE_SUCCESS:
      return { ...state, listaPubbliche: action.payload }
    default:
      return state
  }
}

export default schedePubblicheReducer
