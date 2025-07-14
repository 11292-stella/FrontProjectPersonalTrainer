export const SAVE_SCHEDA_REQUEST = "SAVE_SCHEDA_REQUEST"
export const SAVE_SCHEDA_SUCCESS = "SAVE_SCHEDA_SUCCESS"
export const SAVE_SCHEDA_FAILURE = "SAVE_SCHEDA_FAILURE"

export const FETCH_SCHEDA_REQUEST = "FETCH_SCHEDA_REQUEST"
export const FETCH_SCHEDA_SUCCESS = "FETCH_SCHEDA_SUCCESS"
export const FETCH_SCHEDA_FAILURE = "FETCH_SCHEDA_FAILURE"

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

export const fetchSchedeSalvate = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_SCHEDA_REQUEST })
  try {
    const token = getState().authLog.token

    const res = await fetch("http://localhost:8080/save/schede", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    if (res.status === 204) {
      console.warn("Nessuna scheda salvata al momento")
      dispatch({ type: FETCH_SCHEDA_SUCCESS, payload: [] })
      return
    }

    if (res.status === 403) {
      console.warn("Accesso negato (403)")
      dispatch({
        type: FETCH_SCHEDA_FAILURE,
        payload: "Accesso negato o token non valido",
      })
      return
    }

    if (!res.ok) {
      console.warn("Altro errore di rete:", res.status)
      throw new Error("Errore nella risposta: " + res.status)
    }

    const data = await res.json()
    dispatch({ type: FETCH_SCHEDA_SUCCESS, payload: data })
  } catch (error) {
    console.warn("Fallita la fetch delle schede:", error.message)

    if (
      error.message.includes("403") ||
      error.message.includes("Accesso negato")
    ) {
      dispatch({
        type: FETCH_SCHEDA_FAILURE,
        payload: "Accesso negato o token non valido",
      })
    }
  }
}
