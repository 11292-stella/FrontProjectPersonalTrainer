export const SAVE_SCHEDA_REQUEST = "SAVE_SCHEDA_REQUEST"
export const SAVE_SCHEDA_SUCCESS = "SAVE_SCHEDA_SUCCESS"
export const SAVE_SCHEDA_FAILURE = "SAVE_SCHEDA_FAILURE"

export const saveScheda = (esercizi) => {
  return async (dispatch, getState) => {
    dispatch({ type: SAVE_SCHEDA_REQUEST })

    try {
      const token = getState().authLog.token
      console.log("Tutto lo stato:", getState())

      const response = await fetch("http://localhost:8080/save", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeScheda: "scheda personalizzata",
          esercizi,
        }),
      })

      if (!response.ok) {
        throw new Error("Errore nella richiesta: " + response.status)
      }

      const data = await response.json()
      console.log("dati ricevuti dalla fetch salvaScheda", data)
      dispatch({
        type: SAVE_SCHEDA_SUCCESS,
        payload: data,
      })
      setTimeout(() => {
        console.log("Controllo Redux dopo 100ms:", getState().saveScheda)
      }, 100)
      console.log(
        "Scheda salvata aggiornata:",
        getState().saveScheda.savedScheda
      )
    } catch (error) {
      dispatch({ type: SAVE_SCHEDA_FAILURE, payload: error.message })
    }
  }
}
