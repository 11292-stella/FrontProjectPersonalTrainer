export const FETCH_CARRELLO_REQUEST = "FETCH_CARRELLO_REQUEST"
export const FETCH_CARRELLO_SUCCESS = "FETCH_CARRELLO_SUCCESS"
export const FETCH_CARRELLO_FAILURE = "FETCH_CARRELLO_FAILURE"

export const fetchCarrello = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_CARRELLO_REQUEST })

    try {
      const token = getState().authLog.token

      const response = await fetch("http://localhost:8080/carrello/utente", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Errore durante il fetch carrello")
      }

      const data = await response.json()
      dispatch({ type: FETCH_CARRELLO_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: FETCH_CARRELLO_FAILURE, payload: error.message })
    }
  }
}
