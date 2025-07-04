import { configureStore, combineReducers } from "@reduxjs/toolkit"
import authLogReducer from "../reducers/authLogReducer"
import registerReducer from "../reducers/registerReducer"

const uniqueReducer = combineReducers({
  authLog: authLogReducer,
  register: registerReducer,
})

const store = configureStore({
  reducer: uniqueReducer,
})
export default store
