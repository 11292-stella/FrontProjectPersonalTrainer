import {
  SAVE_SCHEDA_SUCCESS,
  SAVE_SCHEDA_REQUEST,
  SAVE_SCHEDA_FAILURE,
} from "../action/saveSchedaAction"

import { FETCH_SAVED_SCHEDA_SUCCESS } from "../action/schedaActions"

const initialState = {
  saving: false,
  savedScheda: [],
  error: null,
}

const saveSchedaReducer = (state = initialState, action) => {
  console.log("Azione ricevuta nel reducer:", action.type)
  switch (action.type) {
    case SAVE_SCHEDA_REQUEST:
      return { ...state, saving: true, error: null }
    case SAVE_SCHEDA_SUCCESS:
      return { ...state, saving: false }
    case FETCH_SAVED_SCHEDA_SUCCESS:
      return {
        ...state,
        savedScheda: action.payload,
        saving: false,
        error: null,
      }
    case SAVE_SCHEDA_FAILURE:
      return { ...state, saving: false, error: action.payload }
    default:
      return state
  }
}

export default saveSchedaReducer
