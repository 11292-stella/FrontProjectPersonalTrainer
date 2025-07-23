export const AGGIUNGI_AL_CARRELLO_REQUEST = "AGGIUNGI_AL_CARRELLO_REQUEST"
export const AGGIUNGI_AL_CARRELLO_SUCCESS = "AGGIUNGI_AL_CARRELLO_SUCCESS"
export const AGGIUNGI_AL_CARRELLO_FAILURE = "AGGIUNGI_AL_CARRELLO_FAILURE"

export const fetchiconaCarrello = (voceCarrelloDto) => {
  return async (dispatch, getState) => {
    dispatch({ type: AGGIUNGI_AL_CARRELLO_REQUEST })

    try {
      const token = getState().authLog.token

      const response = await fetch(
        "https://conservation-umeko-stella02-65bf7872.koyeb.app/carrello",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(voceCarrelloDto),
        }
      )

      if (!response.ok) {
        throw new Error("Errore durante l'aggiunta al carrello")
      }

      const data = await response.json()
      console.log("Dati ricevuti da aggiungi al carrello:", data)

      dispatch({
        type: AGGIUNGI_AL_CARRELLO_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: AGGIUNGI_AL_CARRELLO_FAILURE,
        payload: error.message,
      })
    }
  }
}
