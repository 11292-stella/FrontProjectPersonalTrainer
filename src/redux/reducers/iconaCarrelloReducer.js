import {
  FETCH_CARRELLO_REQUEST,
  FETCH_CARRELLO_SUCCESS,
  FETCH_CARRELLO_FAILURE,
} from "../action/fetchVociCarrelloAction"

import { DELETE_VOCE_CARRELLO_SUCCESS } from "../action/deleteVoceCarrello"

import {
  AGGIUNGI_AL_CARRELLO_REQUEST,
  AGGIUNGI_AL_CARRELLO_SUCCESS,
  AGGIUNGI_AL_CARRELLO_FAILURE,
} from "../action/iconaCarrelloAction"

const initialState = {
  voci: [],
  loading: false,
  error: null,
}

const iconaCarrelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARRELLO_REQUEST:
      console.log("Reducer (unificato): FETCH_CARRELLO_REQUEST")
      return { ...state, loading: true, error: null }

    case FETCH_CARRELLO_SUCCESS:
      console.log(
        "Reducer (unificato): FETCH_CARRELLO_SUCCESS ricevuto. Payload:",
        action.payload
      )
      console.log(
        "Reducer (unificato): Voci carrello DOPO FETCH_CARRELLO_SUCCESS:",
        action.payload
      )
      return { ...state, loading: false, voci: action.payload }

    case FETCH_CARRELLO_FAILURE:
      console.log(
        "Reducer (unificato): FETCH_CARRELLO_FAILURE ricevuto. Payload:",
        action.payload
      )
      return { ...state, loading: false, error: action.payload }

    case AGGIUNGI_AL_CARRELLO_REQUEST:
      console.log("Reducer (unificato): AGGIUNGI_AL_CARRELLO_REQUEST")
      return {
        ...state,
        loading: true,
        error: null,
      }
    case AGGIUNGI_AL_CARRELLO_SUCCESS:
      console.log(
        "Reducer (unificato): AGGIUNGI_AL_CARRELLO_SUCCESS ricevuto. Payload:",
        action.payload
      )

      return {
        ...state,
        loading: false,
        voci: [...state.voci, action.payload],
      }
    case AGGIUNGI_AL_CARRELLO_FAILURE:
      console.log(
        "Reducer (unificato): AGGIUNGI_AL_CARRELLO_FAILURE ricevuto. Payload:",
        action.payload
      )
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case DELETE_VOCE_CARRELLO_SUCCESS:
      console.log(
        "Reducer (unificato): DELETE_VOCE_CARRELLO_SUCCESS ricevuto con payload (ID voce eliminata):",
        action.payload
      )
      console.log(
        "Reducer (unificato): Tipo di action.payload (DELETE):",
        typeof action.payload
      )
      if (state.voci.length > 0) {
        console.log(
          "Reducer (unificato): Esempio di voce.id nel carrello (DELETE):",
          state.voci[0].id
        )
        console.log(
          "Reducer (unificato): Tipo di voce.id nel carrello (DELETE):",
          typeof state.voci[0].id
        )
      }

      const idToDelete =
        typeof action.payload === "string"
          ? parseInt(action.payload, 10)
          : action.payload

      const newVoci = state.voci.filter((voce) => {
        console.log(
          `  Voce ID: ${
            voce.id
          } (Tipo: ${typeof voce.id}) vs Payload ID: ${idToDelete} (Tipo: ${typeof idToDelete}) -> Match: ${
            voce.id === idToDelete
          }`
        )
        return voce.id !== idToDelete
      })

      console.log(
        "Reducer (unificato): Voci carrello DOPO DELETE_VOCE_CARRELLO_SUCCESS (filtrate):",
        newVoci
      )
      console.log(
        "Reducer (unificato): Lunghezza voci carrello DOPO DELETE_VOCE_CARRELLO_SUCCESS:",
        newVoci.length
      )

      return {
        ...state,
        loading: false,
        voci: newVoci,
      }

    default:
      return state
  }
}

export default iconaCarrelloReducer
