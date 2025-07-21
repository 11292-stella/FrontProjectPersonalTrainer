export const DELETE_VOCE_CARRELLO_SUCCESS = "DELETE_VOCE_CARRELLO_SUCCESS"

export const deleteVoceCarrello = (voceCarrelloId) => {
  return async (dispatch, getState) => {
    const token = getState().authLog.token

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
    } catch (error) {
      console.error("Errore rimozione voce carrello:", error.message)
    }
  }
}
