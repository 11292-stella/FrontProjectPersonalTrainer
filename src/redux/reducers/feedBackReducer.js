import {
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
  FETCH_FEEDBACKS_REQUEST,
  FETCH_FEEDBACKS_SUCCESS,
  FETCH_FEEDBACKS_FAILURE,
} from "../action/feedBackActions"

const initialState = {
  loading: false,
  error: null,
  feedbacks: [],
  success: false,
}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FEEDBACK_REQUEST:
    case FETCH_FEEDBACKS_REQUEST:
      return { ...state, loading: true, error: null, success: false }

    case POST_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        feedbacks: [...state.feedbacks, action.payload],
      }

    case FETCH_FEEDBACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        feedbacks: action.payload,
        error: null,
      }

    case POST_FEEDBACK_FAILURE:
    case FETCH_FEEDBACKS_FAILURE:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default feedbackReducer
