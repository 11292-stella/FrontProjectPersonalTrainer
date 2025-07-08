import { CLOSE_MODAL } from "../action/modalActions"
import { OPEN_MODAL } from "../action/modalActions"

const initialState = {
  isOpen: false,
  selectedMuscle: null,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        selectedMuscle: action.payload,
      }

    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        selectedMuscle: null,
      }
    default:
      return state
  }
}

export default modalReducer
