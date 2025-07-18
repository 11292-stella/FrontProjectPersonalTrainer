import {
  AGGIUNGI_AL_CARRELLO_REQUEST,
  AGGIUNGI_AL_CARRELLO_SUCCESS,
  AGGIUNGI_AL_CARRELLO_FAILURE,
} from "../action/IconaCarrelloAction"

const initialState = {
  voci: [],
  loading: false,
  error: null,
}

const iconaCarrelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGGIUNGI_AL_CARRELLO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case AGGIUNGI_AL_CARRELLO_SUCCESS:
      return {
        ...state,
        loading: false,
        voci: [
          ...state.voci,
          {
            prodottoId: action.payload.prodotto?.id,
            quantita: action.payload.quantita,
            prodotto: action.payload.prodotto,
          },
        ],
      }
    case AGGIUNGI_AL_CARRELLO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default iconaCarrelloReducer
