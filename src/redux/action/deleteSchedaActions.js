export const DELETE_SCHEDA_REQUESTE = "DELETE_SCHEDA_REQUESTE"
export const DELETE_SCHEDA_SUCCESS = "DELETE_SCHEDA_SUCCESS"
export const DELETE_SCHEDA_FAILURE = "DELETE_SCHEDA_FAILURE"
import { fetchSchedeSalvate } from "./saveSchedaAction"

export const deleteScheda = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_SCHEDA_REQUESTE })

    const token = getState().authLog.token
    const res = await fetch(
      `https://conservation-umeko-stella02-65bf7872.koyeb.app/save/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (res.ok) {
      dispatch({ type: DELETE_SCHEDA_SUCCESS, payload: id })
      dispatch(fetchSchedeSalvate())
    } else if (res.status === 403) {
      dispatch({
        type: DELETE_SCHEDA_FAILURE,
        payload: "Non hai il permesso di eliminare questa scheda.",
      })
      alert("Non puoi eliminare una scheda che non ti appartiene.")
    } else {
      const err = await res.text()
      dispatch({ type: DELETE_SCHEDA_FAILURE, payload: err })
    }
  } catch (error) {
    dispatch({ type: DELETE_SCHEDA_FAILURE, payload: error.message })
  }
}
