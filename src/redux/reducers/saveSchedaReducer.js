import {
  SAVE_SCHEDA_SUCCESS,
  SAVE_SCHEDA_REQUEST,
  SAVE_SCHEDA_FAILURE,
} from "../action/saveSchedaAction"

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
      console.log("Payload ricevuto nel reducer:", action.payload)
      return {
        ...state,
        saving: false,
        savedScheda: [...state.savedScheda, action.payload],
      }
    case SAVE_SCHEDA_FAILURE:
      return { ...state, saving: false, error: action.payload }
    default:
      return state
  }
}

export default saveSchedaReducer
