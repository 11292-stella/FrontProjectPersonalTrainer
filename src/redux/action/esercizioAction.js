export const FETCH_ESERCIZI_REQUEST = "FETCH_ESERCIZI_REQUEST"
export const FETCH_ESERCIZI_SUCCESS = "FETCH_ESERCIZI_SUCCESS"
export const FETCH_ESERCIZI_FAILURE = "FETCH_ESERCIZI_FAILURE"

export const fetchEsercizi = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_ESERCIZI_REQUEST })

    try {
      const token = getState().authLog.token

      const response = await fetch(
        "https://conservation-umeko-stella02-65bf7872.koyeb.app/esercizi",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error("Errore nella richiest:" + response.status)
      }

      const data = await response.json()
      console.log("dati ricevuti dalla fetch esercizi:", data)

      dispatch({
        type: FETCH_ESERCIZI_SUCCESS,
        payload: Array.isArray(data.content) ? data.content : [],
      })
    } catch (error) {
      dispatch({ type: FETCH_ESERCIZI_FAILURE, payload: error.message })
    }
  }
}
