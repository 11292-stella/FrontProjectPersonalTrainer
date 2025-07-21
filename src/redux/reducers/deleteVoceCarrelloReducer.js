import {
  FETCH_CARRELLO_REQUEST,
  FETCH_CARRELLO_SUCCESS,
  FETCH_CARRELLO_FAILURE,
} from "./fetchVociCarrelloAction"

export const DELETE_VOCE_CARRELLO_SUCCESS = "DELETE_VOCE_CARRELLO_SUCCESS"

export const deleteVoceCarrello = (voceCarrelloId) => {
  return async (dispatch, getState) => {
    const token = getState().authLog.token
    console.log("Token in deleteVoceCarrello:", token)

    try {
      const response = await fetch(
        `http://localhost:8080/carrello/${voceCarrelloId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      console.log("Risposta delete voce carrello (status):", response.status)

      if (!response.ok) {
        throw new Error(
          "Errore durante l'eliminazione della voce dal carrello: " +
            response.statusText
        )
      }

      dispatch({
        type: DELETE_VOCE_CARRELLO_SUCCESS,
        payload: voceCarrelloId,
      })

      dispatch({ type: FETCH_CARRELLO_REQUEST })
      const updatedResponse = await fetch(
        "http://localhost:8080/carrello/utente",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!updatedResponse.ok) {
        throw new Error(
          "Errore durante il re-fetch del carrello dopo eliminazione"
        )
      }
      const updatedData = await updatedResponse.json()
      dispatch({ type: FETCH_CARRELLO_SUCCESS, payload: updatedData })
    } catch (error) {
      console.error("Errore rimozione voce carrello:", error.message)
    }
  }
}
