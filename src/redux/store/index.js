import { configureStore, combineReducers } from "@reduxjs/toolkit"
import authLogReducer from "../reducers/authLogReducer"
import registerReducer from "../reducers/registerReducer"
import modalReducer from "../reducers/modalReduce"

const uniqueReducer = combineReducers({
  authLog: authLogReducer,
  register: registerReducer,
  modal: modalReducer,
})

const store = configureStore({
  reducer: uniqueReducer,
})
export default store
