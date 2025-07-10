export const FETCH_MUSCLES_REQUEST = "FETCH_MUSCLES_REQUEST"
export const FETCH_MUSCLES_SUCCESS = "FETCH_MUSCLES_SUCCESS"
export const FETCH_MUSCLES_FAILURE = "FETCH_MUSCLES_FAILURE"

export const fetchMuscles = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_MUSCLES_REQUEST })

    try {
      const token = getState().authLog.token

      const response = await fetch("http://localhost:8080/muscoli", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Errore nella richiesta: " + response.status)
      }

      const data = await response.json()
      console.log("🧪 Dati ricevuti dalla fetch muscoli:", data)

      dispatch({
        type: FETCH_MUSCLES_SUCCESS,
        payload: Array.isArray(data.content) ? data.content : [],
      })
    } catch (error) {
      dispatch({ type: FETCH_MUSCLES_FAILURE, payload: error.message })
    }
  }
}
