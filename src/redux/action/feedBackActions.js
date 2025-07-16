import Feedback from "react-bootstrap/esm/Feedback"

export const POST_FEEDBACK_REQUEST = "POST_FEEDBACK_REQUEST"
export const POST_FEEDBACK_SUCCESS = "POST_FEEDBACK_SUCCESS"
export const POST_FEEDBACK_FAILURE = "POST_FEEDBACK_FAILURE"

export const FETCH_FEEDBACKS_REQUEST = "FETCH_FEEDBACKS_REQUEST"
export const FETCH_FEEDBACKS_SUCCESS = "FETCH_FEEDBACKS_SUCCESS"
export const FETCH_FEEDBACKS_FAILURE = "FETCH_FEEDBACKS_FAILURE"

export const postFeedback = (feedback) => {
  return async (dispatch, getState) => {
    dispatch({ type: POST_FEEDBACK_REQUEST })
    const token = getState().authLog.token

    try {
      const response = await fetch("http://localhost:8080/feedback", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      })

      if (!response.ok) {
        throw new Error("Errore nel salvataggio del feedback")
      }

      const data = await response.json()
      dispatch({ type: POST_FEEDBACK_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: POST_FEEDBACK_FAILURE, payload: error.message })
    }
  }
}

export const fetchFeedbacks = (schedaId) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_FEEDBACKS_REQUEST })

    try {
      const token = getState().authLog.token

      const res = await fetch(
        `http://localhost:8080/feedback/scheda/${schedaId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )

      if (!res.ok) {
        throw new Error("Errore nel caricamento dei feedback: " + res.status)
      }

      const data = await res.json()
      dispatch({ type: FETCH_FEEDBACKS_SUCCESS, payload: data })
    } catch (err) {
      dispatch({ type: FETCH_FEEDBACKS_FAILURE, payload: err.message })
    }
  }
}
