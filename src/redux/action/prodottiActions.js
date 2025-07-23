export const FETCH_PRODOTTI_REQUEST = "FETCH_PRODOTTI_REQUEST"
export const FETCH_PRODOTTI_SUCCESS = "FETCH_PRODOTTI_SUCCESS"
export const FETCH_PRODOTTI_FAILURE = "FETCH_PRODOTTI_FAILURE"

export const fetchProdotti = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_PRODOTTI_REQUEST })

    try {
      const token = getState().authLog.token

      const response = await fetch(
        "https://conservation-umeko-stella02-65bf7872.koyeb.app/prodotti",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error("Errore nella richiesta: " + response.status)
      }

      const data = await response.json()
      console.log("Dati ricevuti dalla fetch prodotti: ", data)

      dispatch({
        type: FETCH_PRODOTTI_SUCCESS,
        payload: Array.isArray(data.content) ? data.content : [],
      })
    } catch (error) {
      dispatch({ type: FETCH_PRODOTTI_FAILURE, payload: error.message })
    }
  }
}

export default fetchProdotti
