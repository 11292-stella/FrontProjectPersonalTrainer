export const FETCH_SCHEDA_REQUEST = "FETCH_SCHEDA_REQUEST"
export const FETCH_SCHEDA_SUCCESS = "FETCH_SCHEDA_SUCCESS"
export const FETCH_SCHEDA_FAILURE = "FETCH_SCHEDA_FAILURE"
export const FETCH_SAVED_SCHEDA_SUCCESS = "FETCH_SAVED_SCHEDA_SUCCESS"
export const FETCH_SCHEDE_PUBBLICHE_SUCCESS = "FETCH_SCHEDE_PUBBLICHE_SUCCESS"

export const fetchScheda = (muscoliId) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_SCHEDA_REQUEST })

    try {
      const token = getState().authLog.token

      const response = await fetch("http://localhost:8080/scheda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ muscoliId }),
      })

      if (!response.ok) {
        throw new Error("Errore nella generazione della scheda")
      }

      const data = await response.json()

      dispatch({
        type: FETCH_SCHEDA_SUCCESS,
        payload: Array.isArray(data) ? data : [],
      })
    } catch (error) {
      dispatch({ type: FETCH_SCHEDA_FAILURE, payload: error.message })
    }
  }
}

export const fetchSchedePubbliche = () => async (dispatch, getState) => {
  try {
    const token = getState().authLog.token

    const res = await fetch("http://localhost:8080/save/schede/pubbliche", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    const data = await res.json()
    dispatch({ type: FETCH_SCHEDE_PUBBLICHE_SUCCESS, payload: data })
  } catch (error) {
    console.error("Errore nella fetch delle schede pubbliche:", error.message)
  }
}
