import { configureStore, combineReducers } from "@reduxjs/toolkit"
import authLogReducer from "../reducers/authLogReducer"
import registerReducer from "../reducers/registerReducer"
import modalReducer from "../reducers/modalReduce"
import muscleReducer from "../reducers/muscleReducer"
import eserciziReduce from "../reducers/eserciziReduce"
import schedaReduce from "../reducers/schedaReduce"
import saveSchedaReducer from "../reducers/saveSchedaReducer"

const tokenFromStorage = localStorage.getItem("token")

const preloadedState = {
  authLog: {
    token: tokenFromStorage || null,
    isLoggedIn: !!tokenFromStorage,
    error: null,
  },
}

const store = configureStore({
  reducer: {
    authLog: authLogReducer,
    register: registerReducer,
    modal: modalReducer,
    muscles: muscleReducer,
    esercizi: eserciziReduce,
    scheda: schedaReduce,
    saveScheda: saveSchedaReducer,
  },
  preloadedState,
})
export default store
